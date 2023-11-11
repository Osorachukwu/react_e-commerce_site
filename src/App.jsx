import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Cart from './components/pages/Cart'
import Signin from './components/pages/Signin'
import Signup from './components/pages/Signup'
import Electronics from './components/pages/Electronics'
import Jewelery from './components/pages/Jewelery'
import MenCloth from './components/pages/MenCloth'
import WomenCloth from './components/pages/WomenCloth'
import PageNotFound from './components/pages/PageNotFound'
import User from './components/User'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='products' element={<Product />}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />}/>

        {/* Products Routes 👇👇*/}
        
        <Route path='electronics' element={<Electronics />}/>
        <Route path='jewelery' element={<Jewelery />}/>
        <Route path='men' element={<MenCloth />} />
        <Route path='woman' element={<WomenCloth />}/>
        <Route path='*' element={<PageNotFound />}/>
        <Route path='user' element={<User />}/>
        
        {/* Footer Routes 👇👇*/}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
//Installation:-  npm i react-router-dom@6
//This should be done in the App.jsx or the file closest to it




