import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios'

function Login() {
    const [values, setValues] = useState({
        email: '',
        password:''
    })
    const navigate = useNavigate();

    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    if(errors.email === "" && errors.password === "") {
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data === "succes") {
                navigate('/home');
            } else {
                alert("no record existed")
            }
        })
        .catch(err => console.log(err));
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(Validation(values))
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'> 
        <div className='bg-white p-3 rounded w-25'>
            <h2>Se connecter</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Mot de passe</strong></label>
                    <input type='password' placeholder='Mot de passe' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Se connecter</button>
                 <p>you are af gree </p>
                 <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Créer un compte</Link>
            </form>
        </div>
    </div>
  )
}

export default Login