import { useLoaderData } from "react-router-dom"


const ProductDetails = () => {
    const item = useLoaderData()
    const{title} = item.data
    console.log(item.data)
  return (
    <div className="container mx-auto">{title}</div>
  )
}

export default ProductDetails