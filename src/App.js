import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import Order from './components/Order/Order';
import Manage from './components/Manage/Manage';
import { Routes, Route, Link } from "react-router-dom";
import Notfound from './components/not-found/Notfound';
import Cart from './components/cart/Cart';
import PdDetails from './components/pd-detail/PdDetails';

function App() {
  return (
    <div className="App">

       <Header></Header>
       <Routes>
         <Route path="/" element={<Shop></Shop>}></Route>
         <Route path="/shop" element={<Shop></Shop>}></Route>
         <Route path="/order" element={<Order></Order>}></Route>
         <Route path="/manage" element={<Manage></Manage>}></Route>
         <Route path={"/shop/:productkey"} element={<PdDetails></PdDetails>}></Route>
         <Route path="*" element={ <Notfound></Notfound>}></Route>
         
        
         
       </Routes>
      
    </div>
  );
}

export default App;
