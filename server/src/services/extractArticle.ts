import axios from "axios";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

interface ExtractedArticle {
    title: string;
    text: string;
    html: string;
    excerpt: string;
    length: number;
}


export async function extractArticle(url: string): Promise<ExtractedArticle> {
    try {
        // Download HTML
        const response = await axios.get(url, {
            timeout: 10000,
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            },
        });

        // Create DOM
        const dom = new JSDOM(response.data, {
            url,
        });

        // Extract readable article
        const reader = new Readability(dom.window.document);

        const article = reader.parse();

        if (!article) {
            throw new Error("Unable to extract article");
        }

        return {
                title: article.title ?? "",
                text: article.textContent ?? "",
                html: article.content ?? "",
                excerpt: article.excerpt ?? "",
                length: article.length ?? 0,
            };
    } catch (error) {
        console.error(error);
        throw error;
    }
}