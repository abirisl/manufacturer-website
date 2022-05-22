import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Page/Authentication/Login';
import Register from './Page/Authentication/Register';
import Blogs from './Page/Blogs/Blogs';
import Footer from './Page/Footer/Footer';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import NoteFound from './Page/NotFound/NoteFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='*' element={<NoteFound></NoteFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
