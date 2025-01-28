import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export function useAddFav() {
  const { mutate, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: async (articleId: number) => {
      return await axios.post(
        `http://localhost:3001/favorites/add?articleId=${articleId}`,
        {},
        {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
    },
  });

  return { mutate, isPending, isError, isSuccess, error };
}
