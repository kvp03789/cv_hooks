import React from 'react';
import InputField from './InputField'

const PersonalInfo = () => {
    return(
        <div className="form-section">
        <h5>Personal Information</h5>
            <InputField fieldName="First Name"/>
            <InputField fieldName="Last Name"/>
            <InputField fieldName="Address"/>
            <InputField fieldName="Phone Number"/>
            <InputField fieldName="Email"/>  
        </div>
    )
    
}

export default PersonalInfo