import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useAuth = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      try {
        const response = await axios.get("http://localhost:3001/user/profile", {
          withCredentials: true,
        });
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });

  return { user: data, isPending, isError };
};

export default useAuth;
