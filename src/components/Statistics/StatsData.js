import React, { Fragment, useState, useEffect } from "react";
import {
  Switch,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import ACTIONS from "../../redux/actions";

import ExampleOptions from "../Transformations/ExampleOptions";
import ExampleTransformerWithOptions from "../../Transformers/ExampleTransformerWithOptions";
import ExampleTransformerWithoutOptions from "../../Transformers/ExampleTransformerWithoutOptions";
import ScalingNormalization  from "../../Transformers/ScalingNormalization";
import SelectScalingNormalization from "../SelectScalingNormalization";

import StatisticsTable from "./StatisticsTable";

const allTransformers = {
  categorical: [],
  numerical: [
    {
      name: "Example Transformer",
      transformFunction: ExampleTransformerWithOptions,
      optionComponent: ExampleOptions
    },
    {
      name: "Example Transformer without Options",
      transformFunction: ExampleTransformerWithoutOptions
    },
    {
      name: "Normalization",
      transformFunction: ScalingNormalization
    }
  ]
};

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  }
}));

const StatsData = props => {
  const [showNumeric, setShowNumeric] = useState(true);
  const [selectedFeatures, setSelectedFeatures] = useState([]); // selectedFeatures can be used by the transformations so they know what columns to operate on
  const [optionComponentTransformer, setOptionComponentTransformer] = useState(
    null
  );
  const { rawData, statsData, columnNames, data } = useSelector(state => state);
  const dispatch = useDispatch();

  const classes = useStyles();

  // useEffect(() => {
  //   if(rawData.length !== 0)
  //   {
  //     var arrData = rawData.map(d => d.data);
  //     setData(convertToArrayOfObjects(arrData));
  //   }
  // }, []);

   // Converts the array where Arr[0] is Columns and the rest are Rows into Array of Objects with Column names as the keys
   function convertToArrayOfObjects(data) {
    var keys = data.shift(),
      i = 0,
      k = 0,
      obj = null,
      output = [];

    for (i = 0; i < data.length; i++) {
      obj = {};

      for (k = 0; k < keys.length; k++) {
        obj[keys[k]] = data[i][k];
      }

      output.push(obj);
    }

    return output;
  }

  const handleTransformationSelect = transformerName => {
    const selectedTransformer = availableTransformers.find(
      t => t.name === transformerName
    );


    if (selectedTransformer.hasOwnProperty("optionComponent")) {
      setOptionComponentTransformer(selectedTransformer);
    } else {
      updateData(
        selectedTransformer.transformFunction(rawData, selectedFeatures)
      );
    }
  };

  const handleTransformWithOptions = options => {
    updateData(
      optionComponentTransformer.transformFunction(
        rawData,
        selectedFeatures,
        options
      )
    );
  };

  const updateData = transformedData => {
    dispatch(ACTIONS.updateTable(transformedData));
  };

  const handleSelectionChange = selectedFeatureNames => {
    setSelectedFeatures(selectedFeatureNames);
  };

  const availableTransformers = showNumeric
    ? allTransformers.numerical
    : allTransformers.categorical;

  const OptionComponent = optionComponentTransformer?.optionComponent;

  return (
    <div style={{ padding: 10 }}>
      {statsData !== undefined && (
        <Fragment>
          <Grid component="div" container alignItems="center">
            <Grid item>
              <Typography
                component="p"
                style={{ fontWeight: showNumeric ? "normal" : "bold" }}
              >
                Categorical
              </Typography>
            </Grid>
            <Grid item>
              <Switch
                checked={showNumeric}
                onChange={() => setShowNumeric(orig => !orig)}
                name="datatypeSwitch"
              />
            </Grid>
            <Grid item>
              <Typography
                component="p"
                style={{ fontWeight: showNumeric ? "bold" : "normal" }}
              >
                Numerical
              </Typography>
            </Grid>
            <Grid item>
            <SelectScalingNormalization
              columns={statsData.numericColumns}
              data={data}
              target={selectedFeatures}
            ></SelectScalingNormalization>
            </Grid>
            <Grid item style={{ marginLeft: "auto" }}>
              <FormControl
                className={classes.formControl}
                disabled={selectedFeatures.length === 0}
              >
                <InputLabel>Transformations</InputLabel>
                <Select
                  value={""}
                  onChange={event =>
                    handleTransformationSelect(event.target.value)
                  }
                >
                  {availableTransformers.map((transformer, idx) => (
                    <MenuItem key={idx} value={transformer.name}>
                      {transformer.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <StatisticsTable
            numerical={showNumeric}
            statsData={statsData}
            onSelectionChange={handleSelectionChange}
          />
          {optionComponentTransformer && (
            <OptionComponent
              onClose={() => setOptionComponentTransformer(null)}
              onTransform={handleTransformWithOptions}
            />
          )}
        </Fragment>
      )}
    </div>
  );
};

export default StatsData;
