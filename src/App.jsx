import { Route, Routes } from 'react-router-dom';
import './App.css';


//pages...
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Design from './components/product/design/design';
import Postpage from './components/product/post/post';
import Product from './components/product/product';
import Upage from './components/product/UI/ui';
import Uxpage from './components/product/UX/ux';
import Typography from './components/product/typography/typog';
import Errors from './components/product/error/error';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Product /> }/>
        <Route path='/design' element={ <Design /> }/>
        <Route path='/ux' element={ <Uxpage /> }/>
        <Route path='/ui' element={ <Upage /> }/>
        <Route path='/typog' element={ <Typography /> }/>
        <Route path='/post/:userId' element={ <Postpage /> }/>
        <Route path='/err' element={< Errors />} />
      </Routes>
      <Footer />
    </div>
  );
} 
export default App;
