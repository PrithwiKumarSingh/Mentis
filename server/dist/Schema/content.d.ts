import mongoose from "mongoose";
export declare const contentModel: mongoose.Model<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    link?: string | null;
    title?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    link?: string | null;
    title?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    link?: string | null;
    title?: string | null;
}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    link?: string | null;
    title?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    tags: mongoose.Types.ObjectId[];
    userId: mongoose.Types.ObjectId;
    type?: string | null;
    link?: string | null;
    title?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=content.d.ts.map