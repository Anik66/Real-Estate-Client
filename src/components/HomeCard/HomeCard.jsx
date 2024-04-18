import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";






const HomeCard = ({data}) => {
   useEffect(()=>{
    Aos.init({duration:5000});
   },[])

  const {estate_title,image,segment_name,price,id,status,area} =data
  return (
    <div className='animate__animated animate__flipInX  grid' data-aos="fade-zoom-in" >
      <div className="card  bg-base-100 shadow-xl " >
  <figure><img className="w-[400px]" src={image} alt="Shoes" /></figure>
  
  <div className="card-body">
    <hr />
  
    {
  status === 'rent' ? (
    <div className="badge h-[30px] badge-secondary text-xl">{status}</div>
  ) : (
    <div className="badge h-[30px] badge-primary text-xl">{status}</div>
  )
}
  
    <h2 className="card-title">{estate_title}</h2>
    <hr />
    <p className="text-xl ">{segment_name}</p>
    <hr />
    <div className="flex justify-around">
    <p className="text-xl ">{price}</p>
    <p className="text-xl ">{area}</p>
    </div>
    <hr />
    <div className="card-actions justify-start">
      <button className="btn btn-primary"><Link  to ={`FakeData/${id}`}>View Deatils</Link></button>
    </div>
  </div>
</div>
    </div>
  


  );
};

export default HomeCard;


