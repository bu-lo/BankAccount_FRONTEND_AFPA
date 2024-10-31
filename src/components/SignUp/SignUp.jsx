import "../../App.css";
import styles from './SignUp.module.css';

import { useRef, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {

    const [error, setError] = useState(null);     // For managing errors

    const inputEmail = useRef(null);
    const inputPassword = useRef(null);
    const inputName = useRef(null);

    const navigate = useNavigate(); // Hook to manage navigation

    const signUpButtonClick = () => {
        const API_URL = 'http://localhost:8000/auth/signup';

        const requestBody = {
            "email": inputEmail.current.value,
            "password": inputPassword.current.value,
            "fullName": inputName.current.value
        };

        fetch(API_URL,
            {
                body: JSON.stringify(requestBody),
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then((response) => {
                if (!response.ok) { // Check if response is OK
                    throw new Error(`Erreur : ${response.status}`);
                }

                return response.json();
            })
            .then((data) => {
                console.log("Fetched data:", data);
                navigate('/'); // Redirect to the dashboard on successful login
            })
            .catch((error) => {
                setError(error);     // Store the error in the state
                console.log(error);
            });
    }
    return (
        <div className={styles.input}>
            <div className={styles.welcome}>
            <img alt="AFPA logo" src="AFPA.PNG"/>
            <h1 className={styles.welcomeTitle}> WELCOME ! €€€ </h1>
            </div>
            <div>
                <label>Name : </label>
                <input ref={inputName} type="text" id="Name" placeholder="FirstName LastName"></input>
            </div>
            <div>
                <label>Email Address : </label>
                <input ref={inputEmail} type="text" id="Email Address" placeholder="email@email.fr"></input>
            </div>
            <div>
                <label>PassWord : </label>
                <input ref={inputPassword} type="password" id="PassWord" placeholder="Azerty*123"></input>
            </div>
            <button onClick={signUpButtonClick}>Connexion</button>
        </div>

    )
}

export default SignUp;