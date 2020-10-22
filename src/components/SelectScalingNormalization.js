import React, { useState } from "react";
import { Select, Button, Checkbox, FormControl, InputLabel, FormControlLabel, MenuItem, FormHelperText, RadioGroup, Radio} from "@material-ui/core";
import { useDispatch } from "react-redux";
import ACTIONS from "../redux/actions";

const SelectScalingNormalization = (props) => {
    //props : columns, onButtonScaNorm, selectedValue
    var featuresArr = props.columns;

    const handleSelectChange = () => {

    };

    const handleRadioButton = () => {

    }

    return (
        <div>
            <FormControl>
               <RadioGroup name="ScalingNormalization"onChange={handleRadioButton} row="true">
                   <FormControlLabel value="scaling" control={<Radio />} label="Scaling" labelPlacement="end" />
                   <FormControlLabel value="normalization" control={<Radio />} label="Normalization" labelPlacement="end" />
               </RadioGroup>
               <Select
                    multiple
                    onChange={handleSelectChange}
               >
                   {/* {props.columns.map((data) => (
                       <MenuItem value={data} key={data}></MenuItem>
                   ))} */}
                </Select> 
                <Button type="submit" variant="contained" color="primary" size="medium">Transform</Button>
            </FormControl>
        </div>
    );
};

export default SelectScalingNormalization;