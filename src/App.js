import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './Main';
import Trainers from './Trainers';
import ContactUs from './ContactUs';
import Home from './Home';
import About from './About';
import Component from './pictures/Component';

function App() {
  return (
    <div>
      <Component/>
   <BrowserRouter>  
   <Routes> 
      <Route path='/' element = {<Main/>}> 
      <Route index element = {<Home/>}/>
      <Route path='About' element = {<About/>}/>
      <Route path='Trainers' element = {<Trainers/>}/>
      <Route path='ContactUs' element = {<ContactUs/>}/>
   </Route>
   </Routes>
   </BrowserRouter>
     
    </div>
  );
}

export default App;
