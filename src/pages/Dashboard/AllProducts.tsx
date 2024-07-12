import { useDeleteSingleProductsMutation, useGetAllProductsQuery } from "@/redux/api/baseApi";

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllProducts = () => {
  const { data: products, isLoading } = useGetAllProductsQuery(undefined);
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
    // <div>
    //   {/* {
    //     products.data?.map((item)=> (
    //       <div>{item.category}</div>
    //     ))
    //   } */}

    //   <div className="overflow-x-auto">
    //     <table className="table w-full">
    //       {/* head */}
    //       <thead className="text-2xl text-black">
    //         <tr>
    //           <th>No.</th>
    //           <th>Image</th>
    //           <th>Title</th>
    //           <th>Category</th>
    //           <th> Price</th>
    //           <th>Update</th>
    //           <th>Delete</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {products.data?.map((item, index) => (
    //           <tr key={item._id}>
    //             <th>{index + 1}</th>
    //             <td>
    //               <div className="flex items-center gap-3">
    //                 <div className="avatar">
    //                   <div className="mask mask-squircle w-12 h-12">
    //                     <img src={item.image} />
    //                   </div>
    //                 </div>
    //               </div>
    //             </td>
    //             <td>{item.title}</td>
    //             <td>{item.category}</td>
    //             <td>${item.price}</td>
    //             <td>
    //               <Link to={`/dashboard/updateItem/${item._id}`}>
    //                 {/* <Link to={"/dashboard/updateItem"}> */}
    //                 <button
                    
    //                 className="btn btn-ghost btn-lg text-red-500 rounded-xl">
    //                   <FaEdit></FaEdit>
    //                 </button>
    //               </Link>
    //             </td>
    //             <th>
    //               <button 
    //                 onClick={() => handleDeleteItem(item)}
    //                 className="btn btn-ghost btn-lg text-red-500 rounded-xl"
    //               >
    //                 <FaTrashAlt></FaTrashAlt>
    //               </button>
    //             </th>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>


    // ********************responsive done - dashboard table ***************

    <div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    {/* head */}
    <thead className="bg-gray-50">
      <tr className="text-lg text-gray-600">
        <th className="px-6 py-3 text-left">No.</th>
        <th className="px-6 py-3 text-left">Image</th>
        <th className="px-6 py-3 text-left">Title</th>
        <th className="px-6 py-3 text-left">Category</th>
        <th className="px-6 py-3 text-left">Price</th>
        <th className="px-6 py-3 text-left">Update</th>
        <th className="px-6 py-3 text-left">Delete</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {products.data?.map((item, index) => (
        <tr key={item._id} className="text-sm text-gray-600">
          <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
          <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
          <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <Link to={`/dashboard/updateItem/${item._id}`}>
              <button className="text-red-500">
                <FaEdit />
              </button>
            </Link>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button
              onClick={() => handleDeleteItem(item)}
              className="text-red-500"
            >
              <FaTrashAlt />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default AllProducts;
