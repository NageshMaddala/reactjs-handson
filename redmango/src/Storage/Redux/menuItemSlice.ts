import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menuItems: []
};

export const menuItemSlice = createSlice({
    name: 'menuItem',
    initialState: initialState,
    reducers: {
        setMenuItem: (state, action) => {
            state.menuItems = action.payload;
        }
    },
});

export const { setMenuItem } = menuItemSlice.actions;
export const menuItemReducer = menuItemSlice.reducer;