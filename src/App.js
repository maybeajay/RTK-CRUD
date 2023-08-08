import './App.css';
import Admin from './components/Admin';
import AddUserDb from './components/AddUserDb';
import UpdateUserDb from './components/UpdateUserDb';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Admin />}/>
    <Route path='/adduser' element={<AddUserDb />}/>
    <Route path="/updateuser/:id" element={<UpdateUserDb />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
