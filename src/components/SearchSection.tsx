/* eslint-disable @typescript-eslint/no-explicit-any */

import { IoSearchOutline } from "react-icons/io5";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

type TSearchSection = {
  categoryData:string,
  setCategoryData:string,
  sortData:string,
  setSortData:string,
  searchData:string,
  setSearchData:any ,
  sortPriceData:string,
  setSortPriceData:string
}

const SearchSection = ({categoryData,setCategoryData,sortData,setSortData,searchData,setSearchData,sortPriceData,setSortPriceData}:TSearchSection) => {
    
  const handleInputChange = (e) => {
    setSearchData(e.target.value);
  };
  return (
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
  )
}

export default SearchSection