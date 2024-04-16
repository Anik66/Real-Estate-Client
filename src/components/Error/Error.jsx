
import { Link } from 'react-router-dom';
import { TbError404 } from "react-icons/tb";

const Error = () => {
  return (
    <div className='mt-20'>
    <div className='flex flex-col items-center justify-center'>
    <Link to={'/'}>
          <button className=" text-xl font-bold px-7 py-4 rounded-lg bg-[#23BE0A] text-white">Go Back to Home</button>
          </Link>
    </div>
          
          <h2 className="text-center text-3xl font-bold ">Oppppppssssssss!!!!!!</h2>
          <h2 className="text-center text-3xl font-bold">The page not found!!</h2>
         <div className=' items-center flex flex-col  justify-center'>
         <TbError404 className='w-[400px] h-[600px]' ></TbError404>
         </div>
  </div>
  );
};

export default Error;
