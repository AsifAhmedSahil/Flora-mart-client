import { useGetAllProductsQuery } from "@/redux/api/baseApi"
import ProductCart from "./ProductCart"
import { Link } from "react-router-dom"


const Products = () => {
    const {data:product,isError,isLoading} = useGetAllProductsQuery()
    
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-12 mt-10">
        {
            product?.data.map((items,index) => <ProductCart key={index} {...items}/>)
        }
    </div>
    <Link to={"/products"}>
    <button className="btn bg-green-800 text-white hover:bg-green-700">View More</button>
    </Link>
    </>
  )
}

export default Products