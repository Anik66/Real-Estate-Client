import { useLoaderData, useParams } from "react-router-dom";




const Deatils = () => {
  const deatils = useLoaderData();

  const {id } = useParams();

  const IntId  = parseInt(id );
  // const book = books?.find((book) => book.bookId === IntId);
  const detail = deatils?.find((detail) => detail.id=== IntId);

  const {estate_title,image,segment_name, description,price,status,area,location,facilities} =detail





 
 
  return (
  


  <div className="">
      
  <div className='hero  bg-white-200 mb-10 '>
    <div className='hero-content flex-col '>
      <img
        src={image}
        className='lg:w-[700px] animate__animated animate__flipInY  rounded-lg shadow-2xl'
      />
      <div>
        <h1 className='text-5xl font-bold text-center animate__animated animate__flipInY'>{estate_title}</h1>
        <p className='py-6 text-2xl animate__animated animate__flipInY '> <span className="text-2xl font-bold ">Type:</span>{segment_name}</p>
        <hr />
        <p className='py-6 text-2xl animate__animated animate__flipInY '><span className="text-2xl font-bold animate__animated animate__flipInY">Description:</span>{description}</p>
        <hr />

        <p className='py-6 text-2xl animate__animated animate__flipInY '><span className="text-2xl font-bold ">Price:</span >{price}</p>
        
        <hr />
         <p className='py-6 text-2xl space-x-4  animate__animated animate__flipInY'><span className="text-2xl font-bold ">Status:</span>{status}</p>
        <hr />
         <p className='py-6 text-2xl space-x-4 animate__animated animate__flipInY'><span className="text-2xl font-bold ">Area:</span>{area}</p>
        <hr />
         <p className='py-6 text-2xl space-x-4 animate__animated animate__flipInY'><span className="text-2xl font-bold animate__animated animate__flipInY">Location:</span>{location}</p>
        
        
        
        
        
        <hr />
        
                       <div >
                            <p className=" font-bold text-2xl animate__animated animate__flipInY">Facilities-</p>
 
                            {
                                facilities.map((facility, index) => <li className="text-2xl " key={index}>{facility}</li>)
                            }
 
 
                        </div>
              
              
             
        
      </div>

      <div>
      <hr />
      <button className="btn btn-accent flex text-2xl justify-center h-10 animate__animated animate__flipInY ">Book Now</button>
      </div>
      
    </div>
  </div>
  
</div>


  
  );
};

export default Deatils;