import logo from './logo.svg';
import './App.css';
import './styles/main.css'
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import { createContext } from 'react';
export const  UserContext=createContext()
const users={
  name:"anirban",
  email:"anirban.per@gmail.com"
}

function App() {
  return (
    <div className="bms-main">
     <UserContext.Provider value={users}>
        <Header/>
        <Footer/>

    </UserContext.Provider>
    </div>
  );
}

export default App;
