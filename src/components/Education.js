import React, { useState } from 'react';

const Education = (props) => {

    const [count, setCount] = useState(1)

    const handleAdd = () => {
        let educationItem ={};
        educationItem.key = count;
        setCount(count + 1);
        const formInputs = document.querySelectorAll(".work-education-input");
        formInputs.forEach((input) => {
            educationItem[input.placeholder] = input.value;
        })
        //clear form inputs
        formInputs.forEach((input) => {
            input.value = ''
        })
        props.onEducationSubmit(educationItem)
    }

    return(
        <div className="form-section">
            <h5>Education</h5>
            <input className="input-field work-education-input" placeholder="University"/>
            <input className="input-field work-education-input" placeholder="City"/>
            <input className="input-field work-education-input" placeholder="Degree"/>
            <input className="input-field work-education-input" placeholder="Subject"/>
            <input className="input-field work-education-input" placeholder="From"/>
            <input className="input-field work-education-input" placeholder="To"/>
            <div className="button-container">
                <button>Delete</button>
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export default Education