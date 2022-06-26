import {useEffect, useState} from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import {useForm} from 'react-hook-form';

const login = () => {
    let user = localStorage.getItem("user");
    if(user){
        user = JSON.parse(user);
      //  setLoggedIn(true);
    } else{
        let user = {userId:1, username:"lalit"};
        localStorage.setItem("user", JSON.stringify(user));
    }
}

function Login () {
    const [email, setEmail] = useState();
    const [loggedIn, setLoggedIn] = useState()

    const location = useLocation();

    const navigate = useNavigate();

    useEffect(()=> {
      //  console.log(JSON.stringify(location)) OR
        console.log(JSON.stringify(location.search))
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const emailHandler =(event) => {
        setEmail(event.target.value);
        setTimeout(() => {
            console.log(`email ${email}`)
        }, 2000);
        
    }

    useEffect(() => {
        console.log(`email2 ${email}`)
    }, [email])

    const submitForm = () => {
        console.log("call");
        navigate("/");
    }
    return (
        <>  
        <h2>Call usestate to avoid not calling</h2>
            <form onSubmit={submitForm}>
            <input 
                type="text" 
                onChange={emailHandler} 
                {...register("email", {
                   
                }
                    
                )}
                
            />

            {errors.email && <p>Email is required.</p>}
            <button>Login</button>
            </form>
            
            

        </>
    )
}

export default Login