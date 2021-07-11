import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Bannar from "./Bannar/Bannar"
import Boxicon  from './Boxicon/Boxicon';
import Productitem from "./Productitem/Productitem"


function App() {
  return (
    <div className="App">
    
    
    <Header/>
    <Bannar/>
    <Boxicon/>
    <Productitem/>
    </div>
  );
}

export default App;
