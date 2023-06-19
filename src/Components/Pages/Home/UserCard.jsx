import React from "react";
import { toast } from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { skidsAxios } from "../../../Utilites/Hooks/useAxiosSecure";
const UserCard = ({ user, refetch }) => {
  const { name, email, phone_number } = user;

  // Delete Fn
  const handleDelete = (user) => {
    // Delete Confirmation
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Deleting A User
        skidsAxios
          .delete(`/users/${user._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", `${name} has been deleted.`, "success");
            }
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
        <p>{phone_number}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning">
            <FiEdit size={18} />{" "}
          </button>
          <button className="btn btn-error" onClick={() => handleDelete(user)}>
            <RiDeleteBin5Line size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
