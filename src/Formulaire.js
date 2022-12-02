import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';

import './Formulaire.css';
import ditto from './dittoGif.gif';
function Formulaire(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ correct, handleCorrect]= useState(false);
    const [nb, handlenb]= useState(0);
    const onSubmit = (data) => {
        console.log(data);
    };
    const good = () => {
        window.alert('Votre formulaire a bien été envoyé.')
      };
    const passage = ()=>{
        if(nb==3){handleCorrect(true);
            console.log("passage");}
            console.log(nb);
        console.log("pas passage");
    }
    
    return (
        <div>
            <div class="app">
                <div class="ditto">
                <centre><span>Welcome to Ditto's form</span></centre><br></br>
                </div>
                <div class="form">
                    <div class="formulaire" onChange={()=>passage()}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Field>
                            <label>Prenom   </label>
                            <input type="text" 
                                name="firstName" 
                                placeholder='Prénom'
                                {...register("firstName", { required: true, maxLength: 10 })}
                                onChange={()=>handlenb(1)}
                            /><br></br><br></br>
                            
                        </Form.Field>
                        {errors.firstName && <p>Renseignez votre prénom !</p>
                        }
                        <Form.Field>
                            <label>Nom   </label>
                            <input
                                placeholder='Nom'
                                type="text"
                                name="lastName"
                                {...register("lastName", { required: true, maxLength: 15 })}
                                onChange={()=>handlenb(2)}
                            /><br></br><br></br>
                        </Form.Field>
                        {errors.lastName && <p>Renseignez votre nom de famille !</p>}
                        <Form.Field>
                            <label>Email   </label>
                            <input
                                placeholder='Email'
                                type="email"
                                name="email_address"
                                {...register("email",
                                    {
                                        required: true,
                                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    })}
                                    onChange={()=>handlenb(3)}
                            /><br></br><br></br>
                        </Form.Field>
                        {errors.email && <p>Renseignez votre email !</p>}
                        <Form.Field>
                            <label>Phone   </label>
                                    <input 
                                        type="tel" 
                                        name="phoneNumber"
                                        placeholder='Numéro de téléphone'
                                        {...register("phoneNumber", { required: true, valueAsNumber: true })}
                                        onChange={()=>handlenb(4)}
                                    /><br></br><br></br>
                        </Form.Field>
                        {errors.phoneNumber && <p>Renseignez votre numéro de téléphone</p>}
                        {correct ? (<Button type='submit' onClick={good}>Valider</Button>):
                        (<img class="d" src={ditto} alt='hello'/> )}
                    </Form>
                    </div>
                </div>
            </div>
        </div>
    )
  
}

export default Formulaire;
