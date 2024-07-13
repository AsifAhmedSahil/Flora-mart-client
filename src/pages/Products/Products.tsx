/* eslint-disable @typescript-eslint/no-explicit-any */
import Pagination from "@/components/Pagination";
import ProductCart from "@/components/ProductCart";

import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import { useState } from "react";


import { IoSearchOutline } from "react-icons/io5";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Products = () => {
    const [categoryData,setCategoryData] = useState("")
  const [sortData,setSortData] = useState("")
  const [searchData,setSearchData] = useState("")
    
    const { data: products} = useGetAllProductsQuery({ category: categoryData, sortName: sortData,search:searchData });
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products?.data.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber:any) => {
        setCurrentPage(pageNumber);
    };

    const handleInputChange = (e: { target: { value: any; }; }) => {
        setSearchData(e.target.value);
      };

    return (
        <>
        {/* <SearchSection categoryData={categoryData} setCategoryData={setCategoryData}sortData={sortData} setSortData={setSortData} searchData={searchData} setSearchData={setSearchData}/> */}
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
        // @ts-ign
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-6 md:gap-12 lg:gap-12 mt-10">
                {
                    currentProducts?.map((product:any) => (
                        <ProductCart key={product._id} {...product} currentPage={currentPage} />
                        
                    ))
                }
            </div>
            <Pagination productsPerPage={productsPerPage} totalProducts={products?.data.length} paginate={paginate} activePage={currentPage} />
        </>
    );
};

export default Products;