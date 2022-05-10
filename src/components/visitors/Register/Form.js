import React, {useEffect, useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const styles = {
    form: {
        marginTop: "5vh",
    },

    topMargin: {
        marginTop: "1vh",
    },
}



function LoginForm() {
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
   
    const [errorLogin, setErrorLogin] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    }) 

    const [error, setError] = useState();
    
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = e => {
        let { name, value } = e.target;

        setErrorLogin(prev => {
            const stateObj = { ...prev, [name]: "" };
        
            switch (name) {
                case "email":
                    if (!value) {
                        stateObj[name] = "Please enter your email.";
                    }
                    break;
        
                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter your Password.";
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : errorLogin.confirmPassword;
                    }
                    break;
        
                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;
            
                default:
                    break;
            }
        
            return stateObj;
        });
    }

    async function register(){
        if(input.email){
            if(input.password){
                if(input.password == input.confirmPassword){
                    const auth = getAuth();
                    createUserWithEmailAndPassword(auth, input.email, input.password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            console.log(user)
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorCode)
                            if(errorCode == 'auth/email-already-in-use'){
                                setError("The email you inserted has been used already")
                            }
                        });
                } else {          
                setErrorLogin(prev => {
                    return { ...prev, confirmPassword: "Password and Confirm Password does not match." }
                })
            }
            } else {          
                setErrorLogin(prev => {
                    return { ...prev, password: "Please enter your Password." }
                })
            }
        } else {            
            setErrorLogin(prev => {
                return { ...prev, email: "Please enter your email." }
            })
        }
        
    }

  return (
    <div className="w-50 container">
        <div style={styles.form}>
            <h1 className="h3 mb-3 fw-normal text-center">Register</h1>

            <div className="form-floating" style={styles.topMargin}>
                <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com"                    
                    onChange={onInputChange}
                />
                <label htmlFor="floatingInput">Email address</label>
                {errorLogin.email && <span className='text-danger'>{errorLogin.email}</span>}
            </div>

            <div className="form-floating" style={styles.topMargin}>
                <input 
                    type="password" 
                    name="password"
                    className="form-control" 
                    id="floatingPassword" 
                    placeholder="Password" 
                    onChange={onInputChange}
                />
                <label htmlFor="floatingPassword">Password</label>
                {errorLogin.password && <span className='text-danger'>{errorLogin.password}</span>}
            </div>

            <div className="form-floating" style={styles.topMargin}>
                <input 
                    type="password" 
                    name="confirmPassword"
                    className="form-control" 
                    id="floatingConfirmPassword" 
                    placeholder="Confirm Password"  
                    onChange={onInputChange}
                />
                <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            </div>
            {errorLogin.confirmPassword && <span className='text-danger'>{errorLogin.confirmPassword}</span>}

            {/* <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div> */}

            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={register} style={styles.topMargin}>Register</button>
            <h4 className="h5 fw-normal text-center" style={styles.topMargin}>Or login <a href="./login">here</a></h4>
        </div>
    </div>
  )
}

export default LoginForm