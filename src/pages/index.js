import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useContext } from "react";
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Homebody from '../components/Homebody';

export default function Home() {
  const [image, setImage] = useState("Image");

  return (
    <div>
      <Navbar/>
      <Homebody/>
      <Layout/>
    </div>
    
  )
}
