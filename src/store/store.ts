import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './theme/themeSlicer';
import filtersReducer from './filters/filtersSlicer';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        filters: filtersReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
