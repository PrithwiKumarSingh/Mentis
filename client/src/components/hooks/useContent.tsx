import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";

export function useContent() {
    const [contents, setContents] = useState([]);
    const [trashContent, setTrashContent] = useState([]);
    const [loading, setLoading] = useState(true);

    async function refresh() {
        const response = await axios.get(
            `${BACKEND_URL}/api/v1/content`,
            { withCredentials: true }
        );

        setContents(response.data.content);
    }

    async function trashRefresh() {
        const response = await axios.get(
            `${BACKEND_URL}/api/v1/trash`,
            { withCredentials: true }
        );

        setTrashContent(response.data.content);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);

                await Promise.all([
                    refresh(),
                    trashRefresh()
                ]);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return {
        contents,
        trashContent,
        refresh,
        trashRefresh,
        loading
    };
}