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
    <div className="px-5 xl:px-10 md:w-2/3 mb-10  mx-auto border-red-600 border">
  
        <h1 className="mt-10 mb-16 text-4xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed">Find your perfect  <span className="text-green-600">plant</span> </h1>
        <form action="/addProduct"  className="bg-white p-4 rounded-full relative flex items-center border border-gray-500">
        <IoSearchOutline className="w-5 h-5 mr-2 text-neutral-300"/>
            <input value={searchData} onChange={handleInputChange} className="bg-white outline-none w-full" type="search" name="query" placeholder="Search For Your Perfect Plants" id="search" />

            {/* for category */}
        <div >
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
     
      <button className=" px-2  border border-gray-500">Category</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter By Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={categoryData} onValueChange={setCategoryData}>
          <DropdownMenuRadioItem value="flower">Flower</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="plant">Plant</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fruit">Fruit</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>

        {/* for sorting by asn and des */}
        <div  className="p-4">
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
     
      <button className=" px-2  border border-gray-500 ">Sort</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort By alphabet</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={sortData} onValueChange={setSortData}>
          <DropdownMenuRadioItem value="asc">Acending</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="desc">decending</DropdownMenuRadioItem>
          
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>

        {/* for sorting by price high and low */}
        <div  className="p-4">
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
     
      <button className=" px-2  border border-gray-500 ">Sort</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort By Price</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={sortPriceData} onValueChange={setSortPriceData}>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
          
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>
        </form>
    </div>
  )
}

export default SearchSection