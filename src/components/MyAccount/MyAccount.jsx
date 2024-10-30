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
          <p>BirthDate : {client.birthdate}</p>
        </div>
      </div>
      {/* <div>
        <p>Balance : {account.balance}</p>
        <p>Insurance : {}</p>
      </div> */}
    </div>
  );
}

MyAccount.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    birthdate: PropTypes.instanceOf(Date)
  }),
  // account: PropTypes.shape({
  //   balance: PropTypes.number
  // })
}

export default MyAccount;

