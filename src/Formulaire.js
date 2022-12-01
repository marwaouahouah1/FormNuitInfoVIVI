import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';

import './Formulaire.css';

function Formulaire(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>Prenom</label>
                    <input type="text" 
                        name="firstName" 
                        placeholder='Prénom'
                        {...register("firstName", { required: true, maxLength: 10 })}
                    />
                    
                </Form.Field>
                {errors.firstName && <p>Renseignez votre prénom !</p>}
                <Form.Field>
                    <label>Nom de famille</label>
                    <input
                        placeholder='Nom de famille'
                        type="text"
                        name="lastName"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.lastName && <p>Renseignez votre nom de famille !</p>}
                <Form.Field>
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type="email"
                        name="email_address"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p>Renseignez votre email !</p>}
                <Form.Field>
                    <label>Phone</label>
                            <input 
                                type="tel" 
                                name="phoneNumber"
                                placeholder='Numéro de téléphone'
                                {...register("phoneNumber", { required: true, maxLength: 10 })}
                            />
                </Form.Field>
                {errors.phoneNumber && <p>Renseignez votre numéro de téléphone</p>}
                <Button type='submit'>Valider</Button>
            </Form>
        </div>
    )
  
}

export default Formulaire;
