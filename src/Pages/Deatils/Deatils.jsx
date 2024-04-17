import { useParams } from "react-router-dom";


const Deatils = () => {
  const {estate_title,image,segment_name,price,id} =useParams
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src={image} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">{estate_title}</h2>
      <p>{segment_name}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Listen</button>
      </div>
    </div>
  </div>
  );
};

export default Deatils;