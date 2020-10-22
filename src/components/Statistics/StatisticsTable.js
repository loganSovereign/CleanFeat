import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import ACTIONS from "../../redux/actions";
import SelectScalingNormalization from "../SelectScalingNormalization";

const StatisticsTable = props => {
  const dispatch = useDispatch();
  const { statsData } = useSelector(state => state);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    var arrData = 
  }, [])

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(ACTIONS.createTestTable())}
      >
        Test Data
      </Button>
      <SelectScalingNormalization></SelectScalingNormalization>
      <br />
      {JSON.stringify(statsData)}
    </div>
  );
};

export default StatisticsTable;
