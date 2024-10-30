import "../../App.css";
import styles from './SignUp.module.css';

function SignUp() {
    return (
        <div className={styles.input}>
            <div className={styles.welcome}>
            <img alt="AFPA logo" src="AFPA.PNG"/>
            <h1 className={styles.welcomeTitle}> WELCOME ! €€€ </h1>
            </div>
            <div>
                <label>Name : </label>
                <input type="text" id="Name" placeholder="FirstName LastName"></input>
            </div>
            <div>
                <label>Email Address : </label>
                <input type="text" id="Email Address" placeholder="email@email.fr"></input>
            </div>
            <div>
                <label>PassWord : </label>
                <input type="text" id="PassWord" placeholder="Azerty*123"></input>
            </div>
            <button>Connexion</button>
        </div>

    )
}

export default SignUp;