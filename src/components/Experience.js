import React, { useState } from 'react';

const Experience = (props) => {
    const [count, setCount] = useState(1)

    const handleSubmit = (e) => {
        let experienceItem ={};
        experienceItem.key = count;
        setCount(count + 1);
        const formInputs = document.querySelectorAll(".work-experience-input");
        formInputs.forEach((input) => {
            experienceItem[input.placeholder] = input.value;
        })
        //clear form inputs
        formInputs.forEach((input) => {
            input.value = ''
        })
        props.onExperienceSubmit(experienceItem)
    }

    return(
        <div className="form-section">
            <h5>Work Experience</h5>
                <input className="input-field work-experience-input" placeholder="Position"/>
                <input className="input-field work-experience-input" placeholder="Company"/>
                <input className="input-field work-experience-input" placeholder="City"/>
                <input className="input-field work-experience-input" placeholder="From"/>
                <input className="input-field work-experience-input" placeholder="To"/>
                <div className="button-container">
                    <button>Delete</button>
                    <button onClick={handleSubmit}>Add</button>
                </div>
        </div>
    )
}

export default Experience