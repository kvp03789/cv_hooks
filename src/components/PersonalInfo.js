import React from 'react';

const PersonalInfo = (props) => {

    const handleNameChange = (e) => {
        props.onNameChange(e.target.value)
    }

    const handleAddressChange = (e) => {
        props.onAddressChange(e.target.value)
    }

    const handlePhoneChange = (e) => {
        props.onPhoneChange(e.target.value)
    }

    const handleEmailChange = (e) => {
        props.onEmailChange(e.target.value)
    }

    return(
        <div className="form-section">
            <h5>Personal Information</h5>
            <input className="input-field" placeholder='Full Name' onChange={(e) => handleNameChange(e)}/>
            <input className="input-field" placeholder="Address" onChange={(e) => handleAddressChange(e)}/>
            <input className="input-field" placeholder="Phone Number" type="number" onChange={(e) => handlePhoneChange(e)}/>
            <input className="input-field" placeholder="Email" onChange={(e) => handleEmailChange(e)}/>
        </div>
    )
    
}

export default PersonalInfo