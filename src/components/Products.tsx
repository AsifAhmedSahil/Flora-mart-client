/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllProductsQuery } from "@/redux/api/baseApi"
import ProductCart from "./ProductCart"
import { Link } from "react-router-dom"
// import SearchSection from "./SearchSection"
import { useState } from "react"


import { IoSearchOutline } from "react-icons/io5";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";




const Products = () => {
  const [categoryData,setCategoryData] = useState<any>("")
  const [sortData,setSortData] = useState<any>("")
  
  const [searchData,setSearchData] = useState("")
  console.log(categoryData)
    // const {data:product,isError,isLoading} = useGetAllProductsQuery(categoryData,sortData)
    const {data:product} = useGetAllProductsQuery({ category: categoryData, sortName: sortData,search:searchData })
    
    console.log(product)
    const productsToShow = product?.data.slice(0, 8);

    const handleInputChange = (e: { target: { value: any; }; }) => {
      setSearchData(e.target.value);
    };
    
  return (
    <>


{/* <SearchSection categoryData={categoryData} setCategoryData={setCategoryData}sortData={sortData} setSortData={setSortData} searchData={searchData} setSearchData={setSearchData} /> */}




<div className="px-5 xl:px-10 md:w-2/3 mb-10  mx-auto ">
  
        <h1 className="mt-10 mb-8 text-xl md:text-2xl lg:text-4xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed">Find your perfect  <span className="text-green-600">plant</span> </h1>
     
        <div className=" flex border border-gray-400 rounded-full px-6 py-3">
        <IoSearchOutline className="w-5 h-5 mr-2 text-neutral-300 "/>
        <input value={searchData} onChange={handleInputChange} className="bg-white outline-none w-full" type="search" name="query" placeholder="Search For Your Perfect Plants" id="search" />
        </div>

      <div className="  flex flex-col lg:flex-row justify-center items-center gap-6 mt-8">
              {/* for category */}
            
              <div >
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
     
      <button className=" px-1  border border-gray-500">Select Category</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter By Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={categoryData} onValueChange={setCategoryData}>
          <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="flower">Flower</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="plant">Plant</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fruit">Fruit</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>

        {/* for sorting by asn and des */}
        <div  className="">
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
     
      <button className=" px-2  border border-gray-500 ">Sort By Name & Price</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>Sort </DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        
        <DropdownMenuRadioGroup value={sortData} onValueChange={setSortData}>
          <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="asc">Acending(A to Z)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="desc">decending(Z to A)</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="high">High to low</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low to high</DropdownMenuRadioItem>
          
          
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>

       

      </div>
       
    </div>




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-12 mt-10">
        {productsToShow && 
            productsToShow.map((items:any,index:any) => <ProductCart key={index} {...items} />)
        }
    </div>
    <Link to={"/products"}>
    <button className="btn bg-gradient-to-r from-green-500 to-green-800 font-bold text-white  mt-10">Explore More</button>
    </Link>
    </>
  )
}

export default Products