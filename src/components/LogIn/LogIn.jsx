import "../../App.css";
import styles from './LogIn.module.css';

import { useRef, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';


function LogIn() {

    const [data, setData] = useState([]);      // Stores the list of clients from the API
    const [error, setError] = useState(null);     // For managing errors

    const inputEmail = useRef(null);
    const inputPassword = useRef(null);

    const navigate = useNavigate(); // Hook to manage navigation

    const logInButtonClick = () => {
        const API_URL = 'http://localhost:8000/auth/login';

        const requestBody = {
            "email": inputEmail.current.value,
            "password": inputPassword.current.value
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
                localStorage.setItem('token', data.token);
                setData(data);      // Store the list of clients in the state
                navigate('/allaccounts'); // Redirect to the dashboard on successful login
            })
            .catch((error) => {
                setError(error);     // Store the error in the state
                console.log(error);
            });
    }

    return (
        <div className={styles.input}>
            <div className={styles.welcome}>
                <img alt="AFPA logo" src="AFPA.PNG" />
                <h1 className={styles.welcomeTitle}> WELCOME ! €€€ </h1>
            </div>
            <div>
                <label>Email Address : </label>
                <input ref={inputEmail} type="text" id="Email Address" placeholder="email@email.fr"></input>
            </div>
            <div>
                <label>PassWord : </label>
                <input ref={inputPassword} type="password" id="PassWord" placeholder="Azerty*123"></input>
            </div>
            <button onClick={logInButtonClick}>Connexion</button>
            {error && <p className={styles.error}>Erreur : {error.message}</p>}
        </div>

    )
}

export default LogIn;

// https://codedamn.com/news/reactjs/a-comprehensive-guide-to-using-useref-hook
// https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
// https://www.robinwieruch.de/local-storage-react/#local-storage-in-react
// https://mkyong.com/javascript/how-to-access-json-object-in-javascript/
// https://reqbin.com/code/javascript/ricgaie0/javascript-fetch-bearer-token

