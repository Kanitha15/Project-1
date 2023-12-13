import React, { useState} from 'react'
import './Register.css';
function Register(){  
const [registrationStatus, setRegistrationStatus] = useState(null);  

const handleRegistration = () => {
   
    setRegistrationStatus('success');
  };

  return (
    <div class="wrapper">
    <div class="title">
      Registration Form
    </div>
    <div class="form">
       <div class="inputfield">
          <label>First Name</label>
          <input type="text" class="input" required/>
       </div>  
        <div class="inputfield">
          <label>Last Name</label>
          <input type="text" class="input" required/>
       </div>  
       <div class="inputfield">
          <label>Password</label>
          <input type="password" class="input" required/>
       </div>  
      <div class="inputfield">
          <label>Confirm Password</label>
          <input type="password" class="input" required/>
       </div> 
        <div class="inputfield">
          <label>Gender</label>
          <div class="custom_select">
            <select>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
       </div> 
        <div class="inputfield">
          <label>Email Address</label>
         <input type="text" class="input" required/>
          
       </div> 
      <div class="inputfield">
          <label>Phone Number</label>
          <input type="text" class="input" required/>
       </div> 
      <div class="inputfield">
          <label>Address</label>
          <textarea class="textarea" required></textarea>
       </div> 
      <div class="inputfield">
          <label>Postal Code</label>
          <input type="text" class="input" required/>
       </div> 
      <div class="inputfield terms">
          <label class="check">
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <p>Agreed to terms and conditions</p>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Register" class="btn" onClick={handleRegistration}/>
      </div>
      
      {registrationStatus === 'success' && (
          <div className="registration-success">Registered successfully!</div>
        )}

      </div>
      </div>

  )
}
export default Register;