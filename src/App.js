
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
        <NavBar /> 

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/cat/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;