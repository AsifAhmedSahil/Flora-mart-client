import Pagination from "@/components/Pagination";
import ProductCart from "@/components/ProductCart";
import SearchSection from "@/components/SearchSection";
import { useGetAllProductsQuery } from "@/redux/api/baseApi";
import { useState } from "react";

const Products = () => {
    const [categoryData,setCategoryData] = useState("")
  const [sortData,setSortData] = useState("")
  const [searchData,setSearchData] = useState("")
    
    const { data: products, isError, isLoading } = useGetAllProductsQuery({ category: categoryData, sort: sortData,search:searchData });
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products?.data.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
        <SearchSection categoryData={categoryData} setCategoryData={setCategoryData}sortData={sortData} setSortData={setSortData} searchData={searchData} setSearchData={setSearchData}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-6 md:gap-12 lg:gap-12 mt-10">
                {
                    currentProducts?.map((product) => (
                        <ProductCart key={product._id} {...product} currentPage={currentPage} />
                        
                    ))
                }
            </div>
            <Pagination productsPerPage={productsPerPage} totalProducts={products?.data.length} paginate={paginate} activePage={currentPage} />
        </>
    );
};

export default Products;
