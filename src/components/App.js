import React, { useState } from 'react';
import Header from './Header.js';
import PersonalInfo from './PersonalInfo.js';
import Experience from './Experience.js';
import Education from './Education.js';
import EndButtons from './EndButtons.js';
import GeneratedCV from './GeneratedCV';

const App = (props) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])
  
  const handleNameChange = (newName) => {
    setName(newName) 
  }

  const handleAddressChange = (newAddress) => {
    setAddress(newAddress) 
  }

  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone) 
  }

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail) 
  }

  const handleExperience = (newExperience) => {
    setExperience(experience => [...experience, newExperience])
  }

  const handleEducation = (newEducation) => {
    setEducation(education => [...education, newEducation])
  }

  return (
    <div className="App">
      <Header /> 
        <div className="main">   
          <div className="form">
            <PersonalInfo onNameChange={handleNameChange} onAddressChange={handleAddressChange} onPhoneChange={handlePhoneChange} onEmailChange={handleEmailChange}/>
            <Experience onExperienceSubmit={handleExperience}/>
            <Education onEducationSubmit={handleEducation}/>
            <EndButtons />
          </div> 
          <div className="generated-cv form">
            <GeneratedCV CVName={name} CVAddress={address} CVPhone={phone} CVEmail={email} experienceArray={experience} educationArray={education}/>
          </div>
        </div>   
    </div>
  );
}

export default App;
