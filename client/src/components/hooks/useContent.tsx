import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BACKEND_URL } from "../../config";

import type { RootState, AppDispatch } from "../../store/store";

import {
    setContents,
    setTrashContent,
    setLoading,
} from "../../store/contentSlice";

export function useContent() {
    const dispatch = useDispatch<AppDispatch>();

    const contents = useSelector(
        (state: RootState) => state.content.contents
    );

    const trashContent = useSelector(
        (state: RootState) => state.content.trashContent
    );

    const loading = useSelector(
        (state: RootState) => state.content.loading
    );

    async function refresh() {
        const response = await axios.get(
            `${BACKEND_URL}/api/v1/content`,
            {
                withCredentials: true,
            }
        );

        dispatch(setContents(response.data.content));
    }

    async function trashRefresh() {
        const response = await axios.get(
            `${BACKEND_URL}/api/v1/trash`,
            {
                withCredentials: true,
            }
        );

        dispatch(
            setTrashContent(response.data.content)
        );
    }

    useEffect(() => {
        async function fetchData() {
            try {
                dispatch(setLoading(true));

                await Promise.all([
                    refresh(),
                    trashRefresh(),
                ]);
            } catch (error) {
                console.error(error);
            } finally {
                dispatch(setLoading(false));
            }
        }

        fetchData();
    }, []);

    return {
        contents,
        trashContent,
        refresh,
        trashRefresh,
        loading,
    };
}