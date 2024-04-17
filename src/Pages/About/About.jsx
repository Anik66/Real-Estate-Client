import hotel from '../../assets/hotel.jpg'

const About = () => {
  return (
   <div >
    <div className=" mx-auto containerflex justify-center text-center">
     <div className="text-3xl mx-auto container mt-3 mb-3">Real estate, a cornerstone of investment, encompasses properties like homes, commercial buildings, and land. Its dynamic nature hinges on location, demand, and economic factors,  offering diverse opportunities <br /> for investors and homeowners alike</div>
    </div>

    
      <img className='w-full h-[600px] mb-10 mt-3' src={hotel} alt="" />
   
   </div>
  );
};

export default About;