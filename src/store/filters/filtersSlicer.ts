import { createSlice } from '@reduxjs/toolkit';
import { FilterDto } from '../../utils/dto';

const initialState: FilterDto = {
    readingTimeMinutes: 0,
    positiveReactionsCount: 0,
    tags: [] as string[],
    q: "",
    page: 1,
    perPage: 10,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setReadingTimeMinutes: (state, action) => {
            state.readingTimeMinutes = action.payload;
        },
        setPositiveReactionsCount: (state, action) => {
            state.positiveReactionsCount = action.payload;
        },
        setSelectedTags: (state, action) => {
            state.tags = action.payload;
        },
        setQuery: (state, action) => {
            state.q = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload
        }
    }
});

export const { setReadingTimeMinutes, setPositiveReactionsCount, setSelectedTags, setQuery, setPage, setPerPage } = filtersSlice.actions;

export default filtersSlice.reducer;