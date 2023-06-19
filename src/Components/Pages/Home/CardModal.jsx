import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import { skidsAxios } from "../../../Utilites/Hooks/useAxiosSecure";
const CardModal = ({ setUpdateUser, updateUser, refetch }) => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const { name, email, phone_number, _id } = updateUser;

  // Form Submit
  const onSubmit = (data) => {
    setLoading(true);
    const newUser = { ...data };

    // user update
    skidsAxios
      .patch(`/users/${_id}`, newUser)
      .then((res) => {
        setLoading(false);
        if (res.data.modifiedCount > 0) {
          //   console.log(res.data);
          refetch();
          setUpdateUser(null);
          toast.success("User Updated Successfull!");
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
        console.log(err);
      });
  };
  return (
    <div className="modal" id="my_modal_8">
      <div className="modal-box">
        <h1 className="text-4xl text-center mb-5 uppercase">
          Updating <span className="text-yellow-500">{name}</span>
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              defaultValue={name}
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
              defaultValue={email}
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
              defaultValue={phone_number}
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
                "Update User"
              )}
            </button>
          </div>
        </form>
        <div className="modal-action">
          <a
            href="#"
            onClick={() => setUpdateUser(null)}
            className="btn btn-error absolute top-0 right-0">
            <AiOutlineClose />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
