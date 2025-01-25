import axios from "axios";
import { useQuery} from "@tanstack/react-query";

const useTags = () =>{
    const { data, isPending, isError } = useQuery({
        queryKey: ["tags"],
        queryFn: async () => {
            try {
                const response = await axios.get("http://localhost:3001/articles/tags", {
                    withCredentials: true,
                });
                return response.data;
            } catch (error) {
                throw error;
            }
        },
    });

    return { tags: data || [], isPending, isError };
}

export default useTags;