import React, { useState } from 'react';
//import './style.css';

function Contactme() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [yourComment, setComments] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
   if (value==="") {alert ("Please fill up input")
 return false;
 }else{
   if (name ==="firstName") setFirstName(value);
   else if (name ==="userEmail") setEmail(value);
   else setComments(value);
 return true
  }
    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    //return name === 'firstName' ? setFirstName(value) : Setcomments(value) , setEmail(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    
    // Alert the user their first and last name, clear the inputs
    //alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setComments('');
    setEmail('');
  };

  return (
    <div>

      <form className="form">
         <br/>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br/>
        <input
          value={userEmail}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <br/>
        <textarea
          value={yourComment}
          name="yourComment"
          onChange={handleInputChange}
          type="text"
          placeholder="Your comments"
        />
        <br/>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contactme;