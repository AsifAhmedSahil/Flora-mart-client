import { useDispatch } from "react-redux"
import { useLoaderData } from "react-router-dom"
import { addToCart } from "@/redux/features/cartSlice";


const ProductDetails = () => {
    const item = useLoaderData()
    const dispatch = useDispatch()
    const{title,image,price,rating,category,description,quantity} = item.data
    const cartData = {title,image,price,rating,category,description,quantity,number:1}
    // console.log(item.data)
  return (
    <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-6xl text-center font-bold mt-10 underline">Products Details</h1>
        <div className=" mt-20">
            <div className=" flex flex-col md:flex-row  gap-6">
                <div className="w-full lg:w-3/6 ">
                <img src={image} alt="image" className="h-full lg:h-[500px] w-full lg:w-[650px]" />
                </div>
                <div className="w-full lg:w-3/6  ">
                    <h1 className="text-xl md:text-3xl lg:text-4xl text-center w-full mt-10 font-bold underline ">{title}</h1>
                    <h2 className="text-xl font-bold ml-4 mt-10">Attention:</h2>
                    <p className="ml-4">{description}</p>
                    <h2 className="ml-4 mt-10 text-2xl">TK {price}</h2>
                    <button onClick={()=> dispatch(addToCart(cartData))}  disabled={quantity === 0} className="btn mt-10 ml-4 bg-green-800 text-white hover:bg-green-700 font-bold border-none">Add To Cart</button>
                    <h2 className="ml-4 text-xl mt-10"><span className="font-bold">In Stock:</span> {quantity} piece only</h2>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProductDetails