import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
    value: 'light' | 'dark';
}

const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const initialState: ThemeState = {
    value: getSystemTheme(),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        change: (state) => {
            state.value = state.value === 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { change, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
