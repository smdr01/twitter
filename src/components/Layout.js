import Head from 'next/head'
import React, { useState, useEffect, useContext } from "react";
const Layout = (props) =>{

    const whenClicked = () => {
        for(var i=0;i<10;i++){
          if(i==9) setImage(i);
        }
      }
    return(
        <div onClick={()=>whenClicked()}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          {props.image}
      </main>

      <footer>
        footer
      </footer>
    </div>
    )
}
export default Layout;