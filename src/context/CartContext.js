import React, {createContext, useState} from 'react';
import { db } from '../firebase/firebaseConfig'
import { collection, addDoc } from "firebase/firestore";

const CartContext = createContext();

function CartContextProvider({children}){

    //Llamado al Context de productos: 
    const [products, setProducts] = useState([]);

    //Elementos del comprador de la orden: 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [compra,setCompra] = useState("");

    //Funciones del Carrito de Compras 


    //Agregar productos al carrito de compras: 

    const addProduct = (datos, number) => {
    
    const existing = products.find((p) => p.id === datos.id);

    if (existing) {
        // Sumo al existente
        existing.number += number;
        // Crea un array nuevo
        } else {
        setProducts([...products, { ...datos, number }]);    
        }
    };

    //Borrar productos del carrito al hacer click en "X"

    const delProduct = (id) => {
        products.splice(
        products.findIndex((p) => p.id === id),
        1
        );
        setProducts([...products]);
    };

    const clearCart = () => {
        setProducts([]);
    }

    //Suma de total de productos y costo total

    const productsCount = () => {
        return products.reduce((total, p) => (total += p.number), 0);
    };
    
    const getGrandTotal = () => {
        return products.reduce((total , p) => (total += p.precio * p.number), 0);
    };

    //Funciones para armar órdenes de compra en Firebase

    const manejarCompra = (e) => {
        e.preventDefault();


        const buyerData = {
            buyer : {
                name, 
                phone, 
                email, 
                confirmEmail
            }, 

            items: products, 
            total: getGrandTotal()
        }

        setCompra(buyerData);
        
        const OrderCollection = collection(db, "orders");
        console.log(buyerData)
        addDoc(OrderCollection, buyerData)
        .get()

        .then((res) => {
            console.log(res.id)
            setCompra({
                    id: res.id
                    })
        })
        
    }

    return(
        <CartContext.Provider value={{ products, addProduct, delProduct, clearCart, productsCount, getGrandTotal, setName, name, setPhone, phone, email, setEmail, setConfirmEmail, confirmEmail, manejarCompra, compra }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;
export {CartContextProvider};