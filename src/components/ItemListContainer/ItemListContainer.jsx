import {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos , setProductos] = useState([])
    const {NombreCategoria} = useParams()

    useEffect(() => {
        if(NombreCategoria) {
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prod => prod.NombreCategoria === NombreCategoria)
                const productsList = ItemList({products})
                setProductos(productsList)
            })
        }else{
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
        
                const productsList = ItemList({products})
                setProductos(productsList)
            })
        }

    }, [NombreCategoria])
    
    return (

        <div className='row card-productos'>
            {productos}
        </div>
    );
}

export default ItemListContainer;
