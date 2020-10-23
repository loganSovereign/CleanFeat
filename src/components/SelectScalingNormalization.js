import React, { useState } from "react";
import { Select, Button, Checkbox, FormControl, InputLabel, FormControlLabel, MenuItem, FormHelperText, RadioGroup, Radio, Input,  ListItemText} from "@material-ui/core";
import { useDispatch } from "react-redux";
import ACTIONS from "../redux/actions";

const SelectScalingNormalization = (props) => {
    //props : columns, onButtonScaNorm, selectedValue, data
    const [selectedColumns, setSelectedColumns] = useState([]);

    const handleSelectChange = (event) => {
        const selectedColumn = event.target.value[0];
        const value = selectedColumns;
        value.push(selectedColumn);
        setSelectedColumns(value);
        // for (let i = 0, l = options.length; i < l; i += 1) {
        // if (options[i].selected) {
        //     value.push(options[i].value);
        // }
    //}
        //setSelectedColumns(value);
    };

    const handleRadioButton = () => {

    }

    return (
        <div>
            <FormControl>
               <RadioGroup name="ScalingNormalization"onChange={handleRadioButton} row>
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
                        <Checkbox  />
                        <ListItemText primary={data} />
                    </MenuItem>
                    ))}
                </Select> 
                <Button type="submit" variant="contained" color="primary" size="medium">Transform</Button>
            </FormControl>
        </div>
    );
};

export default SelectScalingNormalization;