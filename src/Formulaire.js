import React from 'react';
import './Formulaire.css';
import ditto from './dittoGif.gif';
function Formulaire(){

	return(
    <><div className='app'>
           
            <img src={ditto} alt='hello'/> 
            <span>Welcome to Ditto's formu</span><br></br>
        <form class="myForm" method="get"> 
           
            <label>Name</label>
            <input type="text" name="customer_name" required/>
            <label>Phone</label>
            <input type="tel" name="phone_number"/>
            <label>Email</label>
            <input type="email" name="email_address"/>
            <p><button>Submit Booking</button></p>
        </form>
        
       </div>
       </>
	)
  
}

export default Formulaire;