import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Product from './components/product';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}>

      </Route>
      <Route path='/cart' element={<Cart/>}>

      </Route>
    </Route>
  ))
  return (
    <>
  <RouterProvider router={router}/>
    </>
  );
}

export default App;
