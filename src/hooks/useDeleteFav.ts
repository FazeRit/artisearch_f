import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export function useDeleteFav() {
  const { mutate, isPending, isError, isSuccess, error } = useMutation({
    mutationFn: async (articleId: number) => {
      return await axios.delete(`http://localhost:3001/favorites/remove?articleId=${articleId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
    },
  });

  return { mutate, isPending, isError, isSuccess, error };
}
