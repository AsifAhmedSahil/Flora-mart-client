import { useDeleteSingleProductsMutation, useGetAllProductsQuery } from "@/redux/api/baseApi";
import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllProducts = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();
  const [deleteItem] = useDeleteSingleProductsMutation()



  if (isLoading) {
    return <>Loading...</>;
  }

  console.log(products.data);

type TAddProduct ={
  _id:string,
    title:string,
    price:number,
    rating:number,
    quantity:number,
    image:string,
    category:string,
    categoryID?:string,
    description:string,
    isDeleted?:boolean,
    instock?:boolean
}

  

  const handleDeleteItem = (item :TAddProduct) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = deleteItem(item._id)
        if(res){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.title} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }


      }
    });
  };

  return (
    <div>
      {/* {
        products.data?.map((item)=> (
          <div>{item.category}</div>
        ))
      } */}

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="text-2xl text-black">
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th> Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.data?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td>
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    {/* <Link to={"/dashboard/updateItem"}> */}
                    <button className="btn btn-ghost btn-lg text-red-500 rounded-xl">
                      <FaEdit></FaEdit>
                    </button>
                  </Link>
                </td>
                <th>
                  <button 
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-ghost btn-lg text-red-500 rounded-xl"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
