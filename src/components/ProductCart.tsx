type TProducts = {
  title: string;
  category: string;
  image: string;
  price: number;
  quantity: number;

  rating: number;
};

const ProductCart = ({
  title,
  category,
  image,
  price,
  quantity,
  rating,
}: TProducts) => {
    console.log(image)
  return (
    <div className="card bg-white w-96 shadow-xl ">
      <figure>
        <img className=""
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
