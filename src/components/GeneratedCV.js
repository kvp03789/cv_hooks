import React, { useState } from 'react';
import UserImage from '../images/user.png'

const GeneratedCV = (props) => {
  const image = new Image();
  image.src = UserImage;
    return (
        <div>
            <div className="cv-header">
              <h1>{props.CVName}</h1>
            </div>
            <div className="cv-body">
                <div className="left">
                  <div className="cv-generated-first">
                    <h5 className="subTitle">Description</h5>
                    <p></p>
                  </div>
                  <div className="cv-generated-second">
                    <h5 className="subTitle">Experience</h5>
                    <div>
                      {props.experienceArray.map((i) => (
                        <div className="experience-item split" key={`${i.key}`}>
                        <div>
                            <h3>
                              {i.To} - {i.From}
                            </h3>
                        </div>
                        <div>
                            <p>
                              {i.Position}
                            </p>
                            <p>
                              {i.Company}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="cv-generated-third">
                    <h5 className="subTitle">Education</h5>  
                    <div>
                      {props.educationArray.map((i) => (
                        <div className="education-item split" key={`${i.key}`}>
                          <div>
                              <h3>
                                {i.University}, {i.City}
                              </h3>
                              <p>
                                Degree: {i.Degree}
                              </p>
                              <p>
                                Subject: {i.Subject}
                              </p>
                          </div>
                          <div>    
                              <h3>
                                {i.From} - {i.To}
                              </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div>
                    <img src={UserImage} alt="user"/>
                  </div>
                  <div>
                    <h5>Address</h5>
                    <p>{props.CVAddress}</p>
                  </div>
                  <div>
                    <h5>Phone</h5>
                    <p>{props.CVPhone}</p>
                  </div>
                  <div>
                    <h5>Email</h5>
                    <p>{props.CVEmail}</p>
                  </div>
                </div>
            </div>   
        </div>
    );
}

export default GeneratedCV