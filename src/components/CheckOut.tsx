import { useAddOrdersMutation } from "@/redux/api/baseApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const [addItems] = useAddOrdersMutation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data); // Ensure this prints the expected form data structure

    // Example of how you might use the mutation hook to add orders
    try {
      const response = await addItems(data);
      if (response.data) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.title} is added to the collections.`,
            showConfirmButton: false,
            timer: 1500,
          });
        // Reset the form after successful submission
        reset();
        navigate("/checkout/payment")
        
      }
    } catch (error) {
      console.error('Error adding order:', error);
      // Handle error scenarios (e.g., show an error message)
      alert('Failed to place order. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Customer Email*</span>
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
            className="input input-bordered w-full px-2 py-4 rounded-full"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>

        <div className="flex gap-6">
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              {...register("firstname", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.firstname && <span className="text-red-500">First name is required</span>}
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              {...register("lastname", { required: true })}
              className="input input-bordered w-full"
            />
            {errors.lastname && <span className="text-red-500">Last name is required</span>}
          </div>
        </div>

        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Number</span>
          </label>
          <input
            type="tel"
            placeholder="Enter Number"
            {...register("number", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.number && <span className="text-red-500">Number is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail Address</span>
          </label>
          <textarea
            {...register("address")}
            className="textarea textarea-bordered h-24"
            placeholder="Address in details"
          ></textarea>
        </div>

        <button type="submit" className="btn mt-10 bg-green-600 text-white hover:bg-green-700">
          Confirm order
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
