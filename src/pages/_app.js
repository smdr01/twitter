import { BrowserRouter as Router, Route, Switch, StaticRouter } from 'react-router-dom';
import HomePage from './index';
import AboutPage from './about';
import Navbar from '../components/Navbar';
import '../styles/globals.css'
import { getSession, Provider } from 'next-auth/client';

function MyApp({Component, pageprops}) {
  return(
    <Provider session={pageprops}>
        <Navbar/>
        <Component {...pageprops}/>
    </Provider>
  )
}

export default MyApp
