type TProducts = {
  title: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
  description:string,
  rating: number;
};

const ProductCart = ({
  title,
  category,
  image,
  price,
  quantity,
  rating,
  description
}: TProducts) => {
    console.log(image)
  return (
    <div className="card bg-white w-11/12 md:w-96 lg:w-96  hover:shadow-xl transition duration-500 rounded-lg ">
      <figure>
        <img className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions  justify-between items-center ">
          <button className="mt-6 py-2 px-2 lg:px-4 bg-orange-200 font-medium rounded-md shadow-md hover:shadow-lg transition duration-300">{category}</button>
          <div className=" mt-6">
          <div className="badge badge-outline mr-2">price: BDT {price}</div>
          <div className="badge badge-outline">Instock : {quantity}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
