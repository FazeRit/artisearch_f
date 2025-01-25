import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSelector, } from 'react-redux';
import { ArticleDto } from '../utils/dto';
import { RootState } from '../store/store';

export function useArticle() {
    const filter = useSelector((state: RootState) => state.filters);

    const { data: articles, isPending, isError, isSuccess } = useQuery<ArticleDto[]>({
        queryKey: ['articles'],
        queryFn: async () => {
            const response = await axios.get(
                `http://localhost:3001/elsearch/search?q=${filter.q}&perPage=${filter.perPage}&page=${filter.page}`,
                {
                    data: {
                        tags: filter?.tags,
                        readingTimeMinutes: filter?.readingTimeMinutes,
                        positiveReactionsCount: filter?.positiveReactionsCount,
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            return response.data || [];
        }}
    );

    return { articles, isPending, isError, isSuccess };
}
