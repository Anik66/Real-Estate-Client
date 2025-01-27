import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { ToastContainer, toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUserProfile, loading,setReload } = useContext(AuthContext);

  const handleProfileUpdate = (e) => {
      e.preventDefault()
      const updatedName = e.target.fullname.value;
      const updatedImage = e.target.photourl.value;

      updateUserProfile(updatedName, updatedImage)
          .then(() => {

              toast.success("Profile updated successfully",{
               position:"top-center",
               
              })
              
              setReload(Date.now())
          })
          .catch((error) => {

              toast.error("Error updating profile: ", error.message);
          });
  };

  return (
      <div className="">
          {loading || user && (
              <div>
                  <h2 className=" mt-10 text-center text-5xl font-semibold underline mb-5">Update Profile</h2>
                  {user && (
                      <div className="flex  justify-center mt-10 animate__animated animate__flipInX ">

                          <div className="card shrink-0 lg:mb-[340px] lg:w-[800px] lg:h-[400px] min-h-1 shadow-2xl bg-base-100">
                              <form onSubmit={handleProfileUpdate} className="card-body">
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text text-xl">Your Name</span>
                                      </label>
                                      <input type="text" name="fullname" placeholder="Your Name" className="input input-bordered" required />
                                  </div>
                                  <div className="form-control">
                                      <label className="label">
                                          <span className="label-text text-xl">Your Image link</span>
                                      </label>
                                      <input type="link" name="photourl" placeholder="Your Image" className="input input-bordered" />
                                  </div>

                                  <div className="form-control mt-6">

                                      <button className="btn font-semibold border-2 px-5 py-2 bg-blue-300 rounded-lg hover:bg-green-300 text-center">Update Profile</button>
                                  </div>

                              </form>
                          </div>

                      </div>
                  )}
              </div>
          )}
          <ToastContainer></ToastContainer>
      </div>
      
  );
};

export default UpdateProfile;
