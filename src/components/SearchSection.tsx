import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const SearchSection = () => {
    const [searchData,setSearchData] = useState("")
  return (
    <div className="px-5 xl:px-10 md:w-2/3 mb-10  mx-auto">
  {/* <div className=""> */}
        <h1 className="mt-10 mb-16 text-4xl xl:text-6xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed">Find your perfect  <span className="text-green-600">plant</span> </h1>
        <form action="/addProduct"  className="bg-white p-4 rounded-full relative flex items-center border border-gray-500">
        <IoSearchOutline className="w-5 h-5 mr-2 text-neutral-300"/>
            <input className="bg-white outline-none w-full" type="search" name="query" placeholder="Search For Your Perfect Plants" id="search" />
        <div >
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
      {/* <Button className=' text-xl font-semibold text-black bg-white '>Category </Button> */}
      <button className=" px-2  border border-gray-500">Category</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter By Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup >
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
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