// store/sidebarSlice.ts
import { createSlice } from '@reduxjs/toolkit';


interface SidebarState {
  activeTitle: string | null;
}

const initialState: SidebarState = {
  activeTitle: null,
};

const sidebarSlice = createSlice({
    name : 'sidebar',
    initialState,
    reducers : {
        setActiveItem : (state , action) => {
            state.activeTitle = state.activeTitle === action.payload ? null : action.payload;
        }
    }
})

export const { setActiveItem } = sidebarSlice.actions;
export default sidebarSlice.reducer;
