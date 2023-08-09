import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CategoriaRopa.css";
import CardRopaUsada from "../../components/CardRopaUsada/CardRopaUsada";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


const CategoriaRopa = () => {
  const { categoria } = useParams();
  const [nameData, setRopaUsadaData] = useState([]);

  useEffect(() => {
    const getRopaUsada = async () => {
      const q = query(collection(db, "RopaUsada"),
      where("categoria", "==", categoria));
      const docs = [];
      const querySnapshot = await getDocs(q);
    
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setRopaUsadaData(docs);
    };
    getRopaUsada();
  }, [categoria]);

  return (
    <div className="CategoriaContainer">
      {nameData.map((data) =>{
        return (
          <div key={data.id}>
            <CardRopaUsada data={data} />
          </div>
        );
        })};
    </div>
  );
};

export default CategoriaRopa;
