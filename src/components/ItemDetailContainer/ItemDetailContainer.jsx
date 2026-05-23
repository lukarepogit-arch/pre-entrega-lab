import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const {id} = useParams(); 

  const [itemDetail, setItemDetail]=useState(null);
  const [loading, setLoading] =useState(true);

  useEffect(() => {
  fetch("/data/products.json")
    .then((res) => res.json())
    .then((data) => {
      const item = data.find((element) => element.id === Number(id));
      
      if (item) {
        setItemDetail(item);
      } else {
        throw new Error("Elemento no encontrado en el JSON");
      }
    })
    .catch((err) => {
      console.error(err);
      setItemDetail(null);
    })
    .finally(() => setLoading(false));
}, [id]);

  if(loading) return <p>Cargando...</p>
  if(!itemDetail) return <p>Producto no encontrado</p>

  return (
    <section>
        <h1>Detalles del producto</h1>
        <div className="products-container">
            <ItemDetail item={itemDetail}/>
        </div>
    </section>
  )
};