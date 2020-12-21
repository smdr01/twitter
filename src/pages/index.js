import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useContext, Fragment } from "react";
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Homebody from '../components/Homebody';
import {Router, Route, Switch} from 'react-router-dom';

function HomePage() {
  const [image, setImage] = useState("Image");

  return (
    <Fragment>
      <Homebody/>
    </Fragment>
  )
}
export default HomePage
