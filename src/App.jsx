
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Container/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Item from './components/Container/Item'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Bienvenido'/> 
      
    </div>
  );
}

export default App;
