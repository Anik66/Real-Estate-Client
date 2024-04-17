import { useLoaderData } from "react-router-dom";
import HomeCard from "../../components/HomeCard/HomeCard";
import Banner from "../../components/Banner/Banner";


const Home = () => {
  const datas = useLoaderData();
  console.log(datas)

  return (
    
   <div>
    <Banner></Banner>
     <div className="  container grid justify-center grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-10 mb-10 space-y-3 ">
      {
        datas.map(datas => <HomeCard key ={datas.id} data={datas}></HomeCard>)
      }
    </div>
   </div>
  );
};

export default Home;


