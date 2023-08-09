import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductoDetail.css";
import CardRopaUsadaDetail from "../../components/CardRopaUsadaDetail/CardRopaUsadaDetail";
import ItemCount from "../../components/ItemCount/ItemCount";


import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ProductoDetail = () => {
  const { id } = useParams();
  const [RopaUsadaData, setRopaUsadaData] = useState([]);
  

  //console.log(RopaUsadaData);

  useEffect(() => {
    const getRopaUsada = async () => {
      const q = query(
        collection(db, "RopaUsada"),
        where(documentId(), "==", id)
      );
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
  }, [id]);

  return (
    <div className="DetailContainer">
      {RopaUsadaData.map((data) =>{
        return (
          <div key={data.id}>
            <CardRopaUsadaDetail data={data} />
            <div>
            <ItemCount details={{id: data.id, stock: data.stock, precio: data.precio, prenda: data.prenda}}/>
            </div>
          </div>
        );
        })}
    </div>
    
  );
};

export default ProductoDetail;
