import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";






const HomeCard = ({data}) => {
   useEffect(()=>{
    Aos.init({duration:5000});
   },[])

  const {estate_title,image,segment_name,price,id} =data
  return (
    <div className='animate__animated animate__flipInX  lg:w-[500px] grid ' >
      <div className="card  bg-base-100 shadow-xl " >
  <figure><img className="w-[400px]" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <hr />
    <p className="text-xl ">{segment_name}</p>
    <hr />
    <p className="text-xl ">{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link  to ={`FakeData/${id}`}>View Deatils</Link></button>
    </div>
  </div>
</div>
    </div>
  


  );
};

export default HomeCard;


