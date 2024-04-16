import { IoLocationOutline } from "react-icons/io5";



const HomeCard = ({data}) => {
  const {estate_title,image,segment_name,price} =data
  return (
    <div className='  lg:w-[500px] grid ' >
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-[400px]" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <hr />
    <p className="text-xl ">{segment_name}</p>
    <hr />
    <p className="text-xl ">{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  


  );
};

export default HomeCard;


