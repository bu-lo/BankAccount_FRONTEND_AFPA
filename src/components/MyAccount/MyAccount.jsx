import PropTypes from 'prop-types';

import "../../App.css";
import styles from './MyAccount.module.css';

function MyAccount({ client }) {
  return (
    <div className={styles.border}>
      <div className={styles.card_header}>
        <img alt="profile" src="profile_pic.PNG" />
        <div className={styles.card_body}>
          <p>{client.firstName} {client.lastName}</p>
          <p>Email : {client.email}</p>
          <p>BirthDate : {client.birthDate}</p>
        </div>
      </div>
      <div>
        <p>Balance : {client.accountBalance.join(" / ")}</p>        {/* ***  CONCATENATION par "" */}
        {/* <p>Balance :</p>
        {client.accountBalance.map((balance, index) => (
          <p key={index}>{balance}</p>
        ))} */}
        <p>Insurance : {client.insName}</p>
      </div>
    </div>
  );
}

MyAccount.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    birthDate: PropTypes.instanceOf(Date),
    accountBalance:PropTypes.number,
    insName:PropTypes.string 
  }),
}

export default MyAccount;

