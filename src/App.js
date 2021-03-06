import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllParts from './Page/AllParts/AllParts';
import Login from './Page/Authentication/Login';
import Register from './Page/Authentication/Register';
import RequireAdmin from './Page/Authentication/RequireAdmin';
import RequireAuth from './Page/Authentication/RequireAuth';
import Blogs from './Page/Blogs/Blogs';
import Addproduct from './Page/Dashboard/Addproduct';
import Dashboard from './Page/Dashboard/Dashboard';
import LoadProfile from './Page/Dashboard/LoadProfile';
import MakeAdmin from './Page/Dashboard/MakeAdmin';
import Manageorder from './Page/Dashboard/Manageorder';
import Manageproduct from './Page/Dashboard/Manageproduct';
import MyOrder from './Page/Dashboard/MyOrder';
import Myprofile from './Page/Dashboard/Myprofile';
import MyReview from './Page/Dashboard/MyReview';
import Payment from './Page/Dashboard/Payment';
import Footer from './Page/Footer/Footer';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import Information from './Page/Information/Information';
import NoteFound from './Page/NotFound/NoteFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='Home' element={<Home></Home>}></Route>
        <Route path='parts' element={<AllParts></AllParts>}></Route>
        <Route path='product/:id' element={
          <RequireAuth>
            <Information></Information>
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Myprofile></Myprofile>}></Route>
          <Route path='myprofile/loadprofile' element={<LoadProfile></LoadProfile>}></Route>
          <Route path='order' element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='manageorder' element={
            <RequireAdmin><Manageorder></Manageorder></RequireAdmin>
          }></Route>
          <Route path='addproduct' element={
            <RequireAdmin><Addproduct></Addproduct></RequireAdmin>
          }></Route>
          <Route path='manageproduct' element={
            <RequireAdmin><Manageproduct></Manageproduct></RequireAdmin>
          }></Route>
          <Route path='makeadmin' element={
            <RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>
          }></Route>
        </Route>
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
