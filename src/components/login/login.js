import { useState, useEffect } from "react"

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [formValid, setFormValid] = useState(false);
    

    useEffect(() =>{
        if(email !== null || password !== null){
            
            const testEmail = email && email.includes("@") ;
            setEmailValid(testEmail);
            console.log("testEmail" + testEmail);
            const testPassword = password && password.length > 4;
            setPasswordValid(testPassword);

            let valid = false;
            if(emailValid && passwordValid){
                valid = true;
            }
            setFormValid(valid)
        }
        
    }, [email, password])

    const emilHandler = (event) => {
        setEmail(event.target.value)
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }
    return (
        <>
        <div>Form is {formValid} </div>
            <div><input type="text" onChange={emilHandler} style={{borderColor: email === null ? "" : "red"}} /></div>
            <div><input type="password" onChange={passwordHandler} style={{borderColor: password === null ? "" : "red"}}/></div>
            <div><input type="submit" /></div>
        </>
    )
}

export default Login