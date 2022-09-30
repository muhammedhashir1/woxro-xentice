import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Iconsbar from './Components/Iconsbar/Iconsbar';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
      <NavBar/>
      <Iconsbar/>
      <Banner/>
      <Services/>
     </div> 
  );
}

export default App;
