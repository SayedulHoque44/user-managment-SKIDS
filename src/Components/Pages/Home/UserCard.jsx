import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { skidsAxios } from "../../../Utilites/Hooks/useAxiosSecure";
import CardModal from "./CardModal";
const UserCard = ({ user, refetch }) => {
  const { name, email, phone_number } = user;
  const [updateUser, setUpdateUser] = useState(null);

  //

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
          <a
            href="#my_modal_8"
            onClick={() => setUpdateUser(user)}
            className="btn btn-warning hover:opacity-80">
            <FiEdit size={18} />{" "}
          </a>
          <button
            className="btn btn-error hover:opacity-80"
            onClick={() => handleDelete(user)}>
            <RiDeleteBin5Line size={18} />
          </button>
          {/* The button to open modal */}

          {/* Put this part before </body> tag */}

          {updateUser && (
            <CardModal
              setUpdateUser={setUpdateUser}
              refetch={refetch}
              updateUser={updateUser}
            />
          )}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
