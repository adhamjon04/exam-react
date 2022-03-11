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


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/all' element={ <Product /> }/>
        <Route path='/design' element={ <Design /> }/>
        <Route path='/ux' element={ <Uxpage /> }/>
        <Route path='/ui' element={ <Upage /> }/>
        <Route path='/typog' element={ <Typography /> }/>
        <Route path='/post/:userId' element={ <Postpage /> }/>
        
      </Routes>
      <Footer />
    </div>
  );
} 
export default App;
