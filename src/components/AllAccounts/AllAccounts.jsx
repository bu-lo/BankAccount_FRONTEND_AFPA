import { useEffect, useState } from "react";
import MyAccount from "../MyAccount/MyAccount";

import "../../App.css";
import styles from './AllAccounts.module.css';

function AllAccounts() {
  const [data, setData] = useState([]);      // Stores the list of clients from the API
  const [loading, setLoading] = useState(true); // For managing loading state
  const [error, setError] = useState(null);     // For managing errors

  useEffect(() => {
    const API_URL = 'http://localhost:8000/api/clients';

    fetch(API_URL,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}
      })

    .then((response) => {
      console.log(localStorage.getItem('token'))
      if (!response.ok) { // Check if response is OK
        throw new Error(`Erreur : ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched data:", data);
      setData(data);      // Store the list of clients in the state
      setLoading(false);   // End loading
    })
    .catch((error) => {
      setError(error);     // Store the error in the state
      setLoading(false);   // End loading
    });
}, []);

if (loading) return <p>Chargement...</p>;
if (error) return <p>Erreur : {error.message}</p>;

// Render the list of client cards
return (
  <div className={styles.cardsContainer}>
    <h2>Liste des clients</h2>
    <div className={styles.allCards}>
      {data.map((client) => (
        <MyAccount key={client.id} client={client} /> // Render a Card for each client
      ))}
    </div>
  </div>
);
}

export default AllAccounts;
