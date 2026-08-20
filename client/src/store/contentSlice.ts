import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Content } from "../types/content";

interface ContentState {
    contents: Content[];
    trashContent: Content[];
    loading: boolean;
}

const initialState: ContentState = {
    contents: [],
    trashContent: [],
    loading: true,
};

const contentSlice = createSlice({
    name: "content",
    initialState,

    reducers: {
        setContents: (
            state,
            action: PayloadAction<Content[]>
        ) => {
            state.contents = action.payload;
        },

        setTrashContent: (
            state,
            action: PayloadAction<Content[]>
        ) => {
            state.trashContent = action.payload;
        },

        setLoading: (
            state,
            action: PayloadAction<boolean>
        ) => {
            state.loading = action.payload;
        },
    },
});

export const {
    setContents,
    setTrashContent,
    setLoading,
} = contentSlice.actions;

export default contentSlice.reducer;