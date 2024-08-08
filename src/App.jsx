import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { MyFooter } from './components/MyFooter';
import { ProductForm } from './components/ProductForm';
import { Home } from './Pages/Home';
import { NotFound } from './Pages/NotFound';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from 'react-router-dom';
import { SharedLatyout } from './layout/SharedLatyout';
import { LoginPage } from './Pages/LoginPage';
import { MyLog } from './Pages/MyLog';







function App() {
 const router = createBrowserRouter(createRoutesFromElements(
 <>
   <Route path='/' element={<SharedLatyout></SharedLatyout>}>
      <Route index element={<Home></Home>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/products/:id' element={<ProductDetails></ProductDetails>}></Route>
      <Route path='/products/:id/edit' element={<ProductForm></ProductForm>}></Route>
      <Route path='/login' element={<MyLog></MyLog>}></Route>

   </Route>
   <Route path='/*' element={<NotFound></NotFound>}></Route>
 </>

 ))
  return (
   <>
  <RouterProvider router={router}>
  <MyNav></MyNav>
  <NotFound></NotFound>
   <MyFooter></MyFooter>
  </RouterProvider>
  
 
   
   </>
  );
}

export default App;
