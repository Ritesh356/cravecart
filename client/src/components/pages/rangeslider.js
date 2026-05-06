import React, { useState } from "react";
import Slider from '@mui/material/Slider';

const Rangeslider = () => {
    const [value, setValue] = React.useState([0, 50]);
    const handleChange = (Event, newValue) => {
        setValue(newValue);
    };
    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 25,
            label: '$25',
        },
        {
            value: 50,
            label: '$50',
        },
        {
            value: 100,
            label: '$100',
        },
    ];

    return (
        <>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                color="black"
                 marks={marks}
                max={100}
                step={5}
            />
            <div className="slidervalue d-flex gap-2"> <span>Price :</span><span>${value[0]} - ${value[1]}</span> </div>
        </>
    )
}

export default Rangeslider;