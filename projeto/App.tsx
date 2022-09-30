import React, { useState, useEffect } from 'react';
import { Routes } from "./src/routes";
import Firebase from './src/config';

export default function App() {

  /* const [ dados, setDados ] = useState();

  useEffect(()=>{
      Firebase.firestore().collection("clientes").get().then((querySnapshot: any[]) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
      });
  }) */

  return (
    <Routes />
  );
}
