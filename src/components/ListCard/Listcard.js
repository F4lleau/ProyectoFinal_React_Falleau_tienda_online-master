
import {Link} from 'react-router-dom'
import CardRopaUsada from '../CardRopaUsada/CardRopaUsada';

import { useEffect, useState } from 'react';

import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs} from "firebase/firestore";


const ListCard = () => {
    const [RopaUsada, setRopaUsada]= useState([]);

    useEffect (() =>{
        const getRopaUsada = async () => {
          const q= query(collection(db, "RopaUsada"));
          const docs = [];
          const querySnapshot = await getDocs(q)
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            docs.push({ ...doc.data(), id: doc.id});
            
          });
          console.log (docs);
          setRopaUsada(docs);
        };
        getRopaUsada();
    
      }, []);
    
    return (
        <div className= "CardRopa">
            {RopaUsada.map ((prenda) =>{
                return(
                <div key={prenda.id} >
                  <Link to ={`/producto-detail/${prenda.id}`} style ={{textDecoration: "none"}}>
                    <CardRopaUsada data= {prenda}/>
                  </Link>
                    
                </div>
                )
            })}     
        </div> 
    );
};

export default ListCard;