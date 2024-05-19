import { createSlice } from '@reduxjs/toolkit';

export type Theme = 'dark' | 'light' | 'system';

const initialState = {
    name: 'theme slice'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {},
});

export default themeSlice.reducer;
