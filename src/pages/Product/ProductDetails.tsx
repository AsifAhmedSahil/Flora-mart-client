import { useLoaderData } from "react-router-dom"


const ProductDetails = () => {
    const item = useLoaderData()
    console.log(item.data)
  return (
    <div className="container mx-auto">ProductDetails</div>
  )
}

export default ProductDetails