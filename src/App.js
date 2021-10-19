import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Header/Header';
import Detail from './Pages/Detail/Detail';
import AboutUs from './Pages/AboutUs/About';
import ContactUs from './Pages/ContactUs/Contact';
import initializeAuthentication from './Firebase/firebase.init';
import Login from './Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';


initializeAuthentication();

function App() {
  return (
    <div className="App"> 

      <AuthProvider>
      <Router>
        <Header></Header>

          <Switch>
              <Route exact path="/">
                <Home></Home>         
              </Route>
              <Route path="/home">
                <Home>Home</Home>
              </Route>
              <PrivateRoute path="/details">
                <Detail>Detail</Detail>
              </PrivateRoute>
              <Route path="/about">
                <AboutUs>About Us</AboutUs>
              </Route>
              <Route path="/contact">
                <ContactUs>Contact Us</ContactUs>
              </Route>  
              <Route path="/login">
              <Login>Login</Login>
              </Route>
              <Route path="/register">
              <Register></Register>
              </Route>
         
              <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>

        <Footer></Footer>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
