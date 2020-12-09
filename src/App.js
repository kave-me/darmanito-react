import React from 'react';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import RegisterPharmacy from './pages/RegisterPharmacy';
import TermAndConditions from './pages/TermAndConditions';
import Navbar from './components/base/navbar';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about-us" component={AboutUs}/>
      <Route exact path="/contact-us" component={ContactUs}/>
      <Route exact path="/faq" component={FAQ}/>
      <Route exact path="/RegisterPharmacy" component={RegisterPharmacy}/>
      <Route exact path="/TermAndConditions" component={TermAndConditions}/>
    </Switch>
    </div>
  );
}

export default App
