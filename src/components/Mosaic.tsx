const Mosaic = () => {
  return (
<>
    <h2 className="text-center text-xl lg:text-5xl md:text-4xl font-bold mt-20 mb-10">Faces of Health and Happiness</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        
      <div className="grid gap-4">

        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?"
            alt=""
          />
        </div>
        <div className="w-full h-96 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
            alt=""
          />
        </div>

        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-full max-w-full rounded-lg"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-full max-w-full rounded-lg"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Mosaic;
