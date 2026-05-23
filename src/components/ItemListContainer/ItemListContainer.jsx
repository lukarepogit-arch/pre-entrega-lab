import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        setLoading(true);
        // pido los datos del json
        fetch("/data/products.json")
        // convierto esos datos en java script
        .then((res) => res.json())
        // seteamos esos datos en setProducts
        .then((data) => setProducts(data))
        // si algo pasa lo agarro con el catch y muestro si hay algun error o no
        .catch(err => console.log("Hubo un error:",err))
        //finally va a mostrar  
        .finally(() =>  setLoading(false));
    },[])

    if (loading) return <p>Cargando...</p>

    return (
    <section>
        <ItemList products= {products}/>
    </section>
    );
}; 