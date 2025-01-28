import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export function useArticle() {
  const filter = useSelector((state: RootState) => state.filters);

  const { tagsPage, ...filterQuery } = filter;
  const { data: articles, isPending, isError, isSuccess } = useQuery({
    queryKey: ['articles', filter],
    queryFn: async () => {
      const response = await axios.post(
        `http://localhost:3001/elsearch/search`,
        filterQuery,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      return response.data || [];
    },
  });

  return { articles, isPending, isError, isSuccess };
}
