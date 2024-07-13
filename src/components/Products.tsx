import { useGetAllProductsQuery } from "@/redux/api/baseApi"
import ProductCart from "./ProductCart"
import { Link } from "react-router-dom"
import SearchSection from "./SearchSection"
import { useState } from "react"





const Products = () => {
  const [categoryData,setCategoryData] = useState("")
  const [sortData,setSortData] = useState("")
  const [searchData,setSearchData] = useState("")
  console.log(categoryData)
    // const {data:product,isError,isLoading} = useGetAllProductsQuery(categoryData,sortData)
    const {data:product,isError,isLoading} = useGetAllProductsQuery({ category: categoryData, sort: sortData,search:searchData })
    
    console.log(product)
    const productsToShow = product?.data.slice(0, 8);
    
  return (
    <>


<SearchSection categoryData={categoryData} setCategoryData={setCategoryData}sortData={sortData} setSortData={setSortData} searchData={searchData} setSearchData={setSearchData}/>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-12 mt-10">
        {productsToShow && 
            productsToShow.map((items,index) => <ProductCart key={index} {...items} />)
        }
    </div>
    <Link to={"/products"}>
    <button className="btn bg-gradient-to-r from-green-500 to-green-800 font-bold text-white  mt-10">Explore More</button>
    </Link>
    </>
  )
}

export default Products