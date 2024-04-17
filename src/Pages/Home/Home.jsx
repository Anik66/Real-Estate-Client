import { useLoaderData } from "react-router-dom";
import HomeCard from "../../components/HomeCard/HomeCard";
import Banner from "../../components/Banner/Banner";


const Home = () => {
  const datas = useLoaderData();
  console.log(datas)

  return (
    
  
    <div >
    <Banner></Banner>
    <div className="flex flex-col justify-center items-center">
       <p className="text-4xl font-bold underline  mt-3 mb-3"> Our Facilities</p>
      
      
        
       
    </div>

    
     <div className="  container grid justify-center grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-10 mb-10 space-y-3 ">
      {
        datas.map(datas => <HomeCard key ={datas.id} data={datas}></HomeCard>)
      }
    </div>
   </div>
  
  );
};

export default Home;


