import { useQuery } from "@tanstack/react-query";
import { skidsAxios } from "./useAxiosSecure";

const useGetUsers = () => {
  // getting skidsUsers
  const {
    data: skidsUser = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await skidsAxios.get("/users");

      return response.data;
    },
  });

  // Returning skidsUsers
  return [skidsUser, isLoading, refetch];
};

export default useGetUsers;
