export interface SummaryData {
    short: string;
    detailed: string;
    bullets: string[];
    keywords: string[];
    actionItems: string[];
}

export interface AI {
    status: "pending" | "processing" | "completed" | "failed";
    model: string;
    promptVersion: number;
    generatedAt: string;
    summaries: SummaryData;
}

export interface Content {
    _id: string;

    title: string;

    type: string;

    link: string;

    metadata: any;

    createdAt: string;

    deletedAt?: string;

    readingTime: number;

    wordCount: number;

    ai: AI;
}