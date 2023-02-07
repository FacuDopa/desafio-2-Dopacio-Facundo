import {useState, useEffect} from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [producto , setProducto] = useState([])

    const {id, nombre} = useParams()

    useEffect(() => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(products => {
            const item = products.find(prod => prod.nombre === nombre)
            setProducto(item)
        })
    }, [])

    return (

        <div className='card my-3 container itemDetail'>
            <ItemDetail item={producto}/>
        </div>
    );
}