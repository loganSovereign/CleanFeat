import React, { useState } from "react";
import { Select, Button, Checkbox, FormControl, InputLabel, FormControlLabel, MenuItem, FormHelperText, RadioGroup, Radio, Input,  ListItemText} from "@material-ui/core";
import { useDispatch } from "react-redux";
import ACTIONS from "../redux/actions";

const SelectScalingNormalization = (props) => {
    //props : columns, onButtonScaNorm, selectedValue, data
    const [selectedColumns, setSelectedColumns] = useState([]);
    const [scaNormOption, setScaNormOption] = useState();

    const handleSelectChange = (event) => {
        setSelectedColumns(event.target.value);
    };

    const handleRadioButton = (event, value) => {
        setScaNormOption(value);
    }

    const onTransformButtonClick = () => {
        
    }

    return (
        <div>
            <FormControl>
               <RadioGroup name="ScalingNormalization"onChange={handleRadioButton} row value={scaNormOption}>
                   <FormControlLabel value="scaling" control={<Radio />} label="Scaling" labelPlacement="end" />
                   <FormControlLabel value="normalization" control={<Radio />} label="Normalization" labelPlacement="end" />
               </RadioGroup>
               <Select
                    multiple
                    onChange={handleSelectChange}
                    value={selectedColumns}
                    input={<Input />}
               >
                   <MenuItem key="Placeholder" disabled>
                    Select columns for scaling/normalization
                    </MenuItem>
                    {props.columns.map((data) => (
                    <MenuItem value={data} key={data}>
                        {data}
                    </MenuItem>
                    ))}
                </Select> 
                <Button type="submit" onclick={onTransformButtonClick} variant="contained" color="primary" size="medium">Transform</Button>
            </FormControl>
        </div>
    );
};

export default SelectScalingNormalization;