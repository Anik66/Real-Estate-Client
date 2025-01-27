import hotel from '../../assets/hotel.jpg'

const About = () => {
  return (
   <div className='mt-10 lg:mt-[80px] lg:mb-[140px]'>
    <div className=" mx-auto containerflex justify-center text-center mb-8">
     <div className="text-3xl mx-auto container mt-3 mb-3 animate__animated animate__flipInX">Real estate, a cornerstone of investment, encompasses properties like homes, commercial buildings, and land. Its dynamic nature hinges on location, demand, and economic factors,  offering diverse opportunities <br /> for investors and homeowners alike</div>
    </div>

    
      <img className='w-full h-[600px] mb-10 mt-3 animate__animated animate__flipInX' src={hotel} alt="" />
   
   </div>
  );
};

export default About;