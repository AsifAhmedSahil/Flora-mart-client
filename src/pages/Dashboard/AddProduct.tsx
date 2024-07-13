import { useAddProductsMutation } from "@/redux/api/baseApi";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

const AddItems = () => {
  const [addItems] = useAddProductsMutation();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const res = addItems(data);
    if (res) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data?.title} is added to the collections.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    reset();
  };

  const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Product Title</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("title", { required: true })}
              onBlur={(e) => {
                e.target.value = capitalizeFirstLetter(e.target.value);
              }}
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
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="flower">flower</option>
                <option value="fruit">fruit</option>
                <option value=" plant"> plant</option>
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
                defaultValue="default"
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
              {...register("description")}
              className="textarea textarea-bordered h-24"
              placeholder="Product Description ..."
            ></textarea>
          </div>

          {/* <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div> */}

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Put image Url"
              {...register("image", { required: true })}
              required
              className="input input-bordered w-full px-2 py-4 rounded-full"
            />
          </div>

          <button className="btn">Add Products</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
