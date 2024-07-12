import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "@/redux/features/cartSlice";

type TProducts = {
  _id:string,
  title: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
  description:string,
  rating: number;
};

const ProductCart = ({
  _id,
  title,
  category,
  image,
  price,
  quantity,
  rating,
  description
}: TProducts) => {
  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };
  // console.log(_id,"from product cart")
  const dispatch = useDispatch()
  const item = {_id,title,category,image,price,quantity,rating,description,number:1} 
  return (
    <>
      
      <div className="card bg-gray-200 w-11/12 md:w-96 lg:w-96  hover:shadow-xl transition duration-500 rounded-lg ">
      <figure>
        <img className="w-full h-[130px] md:h-[180px] lg:h-[220px] object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <Link to={`/items/${_id}`}>
      <div className="card-body">
        <h2 className="card-title text-lg">
        {truncateDescription(title, 20)}
          <div className="badge bg-green-300 px-2 py-2">{rating}★</div>
        </h2>
        <p>{truncateDescription(description, 30)}</p>
        <div className="card-actions  justify-between items-center ">
          <button className="mt-6 py-2 px-2 lg:px-4 bg-white font-medium rounded-md shadow-xl hover:shadow-lg transition duration-300">{category}</button>
          <div className=" mt-6">
          <div className="badge badge-outline mr-2">price: BDT {price}</div>
          <div className="badge badge-outline">Instock : {quantity}</div>
          </div>
        </div>
      </div>
      </Link>
      {quantity && quantity > 0 ?
      <Link to={""} className=" bg-green-800 text-white rounded-lg py-2 w-2/4  mb-6 mx-auto text-center">

      <button onClick={()=> dispatch(addToCart(item))}  disabled={quantity === 0} className="">Add To cart</button>
      </Link>
      : 
      <Link to={""} className=" bg-slate-800 text-white rounded-lg py-2 w-2/4  mb-2 mx-auto text-center">
      <button    className="">Out of stock</button>
      </Link>
      }
    
    </div>
    
    
    </>
  );
};

export default ProductCart;
