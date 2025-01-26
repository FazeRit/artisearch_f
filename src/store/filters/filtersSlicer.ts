import { createSlice } from '@reduxjs/toolkit';
import { FilterDto } from '../../utils/dto';

const initialState: FilterDto = {
    readingTimeMinutes: 50,
    positiveReactionsCount: 50,
    tags: [] as string[],
    q: "",
    page: 1,
    perPage: 10,
    tagsPage: 1
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
        setTagsPage: (state, action) => {
            state.tagsPage = action.payload;
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        }
    }
});

export const { setReadingTimeMinutes, setPositiveReactionsCount, setSelectedTags, setQuery, setPage, setPerPage, setTagsPage } = filtersSlice.actions;

export default filtersSlice.reducer;