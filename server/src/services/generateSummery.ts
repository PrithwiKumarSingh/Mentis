import { Type } from "@google/genai";
import { ai } from "../lib/gemini";
import { contentModel } from "../Schema/content";

export async function generateSummary(contentId: string) {
    try {
        const content = await contentModel.findById(contentId);
        
        if (!content) {
            throw new Error("Content not found");
        }
        
        if (!content.extractedText) {
            throw new Error("No extracted text found");
        }
        const article = content.extractedText.slice(0, 30000);

        content.ai!.status = "processing";
        content.processing!.summaryStatus = "processing";

        await content.save();

        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite",

            contents: `
Summarize the following article.

Article:

${article}
`,

            config: {
                responseMimeType: "application/json",

                responseSchema: {
                    type: Type.OBJECT,

                    properties: {
                        short: {
                            type: Type.STRING,
                            description:
                                "One paragraph summary under 100 words"
                        },

                        detailed: {
                            type: Type.STRING,
                            description:
                                "Detailed explanation in 300-500 words"
                        },

                        bullets: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING
                            }
                        },

                        keywords: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING
                            }
                        },

                        actionItems: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.STRING
                            }
                        }
                    },

                    required: [
                        "short",
                        "detailed",
                        "bullets",
                        "keywords",
                        "actionItems"
                    ]
                }
            }
        });

        const summary = JSON.parse(response.text!);

        content.ai!.summaries = {
            short: summary.short,
            detailed: summary.detailed,
            bullets: summary.bullets,
            keywords: summary.keywords,
            actionItems: summary.actionItems
        };

        content.ai!.status = "completed";
        content.ai!.model = "gemini-3.6-flash";
        content.ai!.generatedAt = new Date();

        content.processing!.summaryStatus = "completed";

        await content.save();

        return summary;

    } catch (err) {

        console.error(err);

        await contentModel.findByIdAndUpdate(contentId,{
            $set:{
                "ai.status":"failed",
                "processing.summaryStatus":"failed"
            }
        });

        throw err;
    }
}