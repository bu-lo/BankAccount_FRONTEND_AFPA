import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import MyAccount from './components/MyAccount/MyAccount';
import AllAccounts from './components/AllAccounts/AllAccounts';


export default function App() {
  return(
    <div>
      
      <Header/>

      <Routes>
        <Route path="/" element={<LogIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/my-account" element={<MyAccount/>}/>
        <Route path="/allaccounts" element={<AllAccounts/>}/>
      </Routes>

    </div>
  )
}



