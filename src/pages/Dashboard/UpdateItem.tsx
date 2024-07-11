

import { useUpdateProductsMutation } from "@/redux/api/baseApi"
import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"

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


const UpdateItem = () => {
    const item= useLoaderData()
    const {_id,title,price,rating,quantity,description,image,category} = item.data
    

    const [updateItem] = useUpdateProductsMutation()
   
    

    const { register, handleSubmit} = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const options = {
        id:_id,
        data:data
    }
    // console.log(_id)
    const res = updateItem(options)
    
    if(res){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.title} updated successfully.`,
            showConfirmButton: false,
            timer: 1500
          });
    }
    
  };
   
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              defaultValue={title}
              placeholder="Product Name"
              {...register("title", { required: true })}
              required
              className="input input-bordered w-full px-2 py-4 rounded-full"
            />
          </div>

          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="flower">flower</option>
                <option value="fruit">fruit</option>
                <option value="money plant">money plant</option>
                <option value="bamboo">bamboo</option>
                <option value="cactus">cactus</option>
              </select>
            </div>


            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                defaultValue={price}
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <select
                defaultValue={rating}
                {...register("rating", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a rating
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>


            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                defaultValue={quantity}
                {...register("quantity", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>


          {/* recipe details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
            defaultValue={description}
              {...register("description")}
              
              className="textarea textarea-bordered h-24"
              placeholder="Product Description ..."
            ></textarea>
          </div>

          {/* <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div> */}

          

          <button className="btn">Add Products</button>
        </form>
      </div>
  )
}

export default UpdateItem