import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import { Link } from 'react-router-dom';

const UserProfile= () => {
  const { user, loading } = useContext(AuthContext);

  return (
      <div className=''>

          {loading || user && (
              <div className="space-y-4 mx-auto lg:mb-[250px]">
                  <h2 className="text-center  text-5xl font-bold my-10">{ `${user.displayName}`} </h2>
                  <div className="flex flex-col justify-center gap-10  items-center py-5 border-2 rounded-2xl text-white w-[500px] mx-auto bg-[#441e87] animate__animated animate__bounce">
                      <div className=" w-[400px] col-span-2">
                          <p><img className=" w-full h-full rounded-2xl" src={user?.photoURL || "https://i.ibb.co/tDP9F9C/anikddd.jpg"} alt="" /></p>

                      </div>
                      <div className=" space-y-4">
                      <p className=" text-2xl font-semibold">Your Email: {user.email}</p>
                          <p className=" text-2xl font-semibold">Your Name: {user.displayName}</p>
                          

                          <div className=" animate__animated animate__bounce flex flex-col justify-items-end">
                              <Link to="/update" className="font-semibold border-2 px-5 py-2 hover:bg-green-300 rounded-lg  text-center text-black">
                                  <button >Update your profile</button>
                              </Link>
                          </div>


                      </div>

                  </div>



              </div>
          )}
      </div>
  );
};



export default UserProfile;