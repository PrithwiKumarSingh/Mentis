import mongoose, {model, Schema} from "mongoose"

const contentTypes =  ['tweet', 'video', 'document', 'link', "tag", ]
const trashSchema = new Schema({
        type: {
            type: String,
            enum: contentTypes,
            required: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },

        link: {
            type: String,
            required: true,
            trim: true,
        },

        metadata: {
            title: String,
            description: String,
            image: String,
            siteName: String,
            favicon: String,
            publishedAt: Date,
        },
        extractedText: {
            type: String,
            default: "",
        },
         ai: {
                    status: {
                        type: String,
                        enum: [
                            "pending",
                            "processing",
                            "completed",
                            "failed",
                        ],
                        default: "pending",
                    },
        
                    model: {
                        type: String,
                        default: "",
                    },
        
                    promptVersion: {
                        type: Number,
                        default: 1,
                    },
        
                    generatedAt: {
                        type: Date,
                    },
        
                    summaries: {
                        short: {
                            type: String,
                            default: "",
                        },
        
                        detailed: {
                            type: String,
                            default: "",
                        },
        
                        bullets: {
                            type: [String],
                            default: [],
                        },
        
                        keywords: {
                            type: [String],
                            default: [],
                        },
        
                        actionItems: {
                            type: [String],
                            default: [],
                        },
                    },
                },
        
        processing: {
            extractionStatus: {
                type: String,
                enum: [
                    "pending",
                    "processing",
                    "completed",
                    "failed",
                ],
                default: "pending",
            },

            summaryStatus: {
                type: String,
                enum: [
                    "pending",
                    "processing",
                    "completed",
                    "failed",
                ],
                default: "pending",
            },

            embeddingStatus: {
                type: String,
                enum: [
                    "pending",
                    "processing",
                    "completed",
                    "failed",
                ],
                default: "pending",
            },
        },
        
        readingTime: {
            type: Number,
            default: 0,
        },

        wordCount: {
            type: Number,
            default: 0,
        },
        deletedAt: {
            type : Date,
            default : Date.now,
            expires : 60 * 60 * 24 * 30,
        },
        tags : [{type: mongoose.Types.ObjectId, ref:"Tag"}],
        userId : {type: mongoose.Types.ObjectId, ref:"user", required:true}
}, {timestamps:true})

export const trashModel = model("trash",trashSchema);