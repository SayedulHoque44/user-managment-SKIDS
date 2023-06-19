import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { skidsAxios } from "../../../Utilites/Hooks/useAxiosSecure";
import SectionContainer from "../../Shared/SectionContainer";

const AddUser = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Form Submit
  const onSubmit = (data) => {
    setLoading(true);
    const newUser = { ...data };
    // console.log(newUser);

    // send user to database
    skidsAxios
      .post("/users", newUser)
      .then((res) => {
        setLoading(false);
        if (res.data.insertedId) {
          //   console.log(res.data);
          reset();
          toast.success("User Added Successfull!");
          navigate("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
        console.log(err);
      });
  };

  return (
    <SectionContainer>
      <h1 className="text-4xl text-center mb-5 uppercase">Add User</h1>
      <div className="flex justify-center">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                required
                {...register("name")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                required
                {...register("email")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                {...register("phone_number")}
                placeholder="Phone Number"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary">
                {loading ? (
                  <span className="loading text-violet-700 loading-spinner loading-md"></span>
                ) : (
                  "Add User"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AddUser;
