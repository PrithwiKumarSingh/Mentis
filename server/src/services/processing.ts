import { contentModel } from '../Schema/content'
import { extractArticle } from "./extractArticle";
import { generateSummary } from './generateSummery';

function cleanText(text: string): string {
    return text
        // Normalize line endings
        .replace(/\r/g, "")

        // Replace tabs with spaces
        .replace(/\t/g, " ")

        // Collapse multiple spaces
        .replace(/ +/g, " ")

        // Collapse 3+ newlines into 2
        .replace(/\n{3,}/g, "\n\n")

        // Remove spaces around newlines
        .replace(/[ \t]*\n[ \t]*/g, "\n")

        // Trim beginning and end
        .trim();
}

export async function processExtraction(contentId: string) {
    try {
        const content = await contentModel.findById(contentId);

        if (!content) {
            throw new Error("Content not found");
        }

        // Mark extraction as processing
        content.processing!.extractionStatus = "processing";
        await content.save();

        const article = await extractArticle(content.link);
        const cleandText = cleanText(article.text)

        // Save extracted data
        content.extractedText = cleandText ?? "";

        const text = article.text ?? ""
        content.wordCount = text
            .split(/\s+/)
            .filter(Boolean).length;

        content.readingTime = Math.ceil(content.wordCount / 200);

        content.processing!.extractionStatus = "completed";

        await content.save();
        await generateSummary(content._id.toString());

        console.log("Article extracted successfully");
    } catch (error) {
        console.error(error);

        await contentModel.findByIdAndUpdate(contentId, {
            "processing.extractionStatus": "failed",
        });
    }
}