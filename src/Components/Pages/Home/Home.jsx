import React from "react";
import useGetUsers from "../../../Utilites/Hooks/useGetUsers";
import SectionContainer from "../../Shared/SectionContainer";
import UserCard from "./UserCard";

const Home = () => {
  const [skidsUser, isLoading, refetch] = useGetUsers();
  return (
    <div>
      <SectionContainer>
        <h1 className="text-4xl text-center mb-5 uppercase">All User</h1>

        <div className="grid justify-center grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {skidsUser.map((user) => (
            <UserCard key={user._id} user={user} refetch={refetch} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
};

export default Home;
