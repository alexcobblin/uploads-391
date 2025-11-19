"use server";
import getCollection, { URL_COLLECTION } from "@/db";
import { UrlProps } from "@/types";
import getAllUrls from "./getAllUrls";

export default async function createNewPost(
    alias: string,
    url: string,
): Promise<UrlProps> {
    console.log("creating new post");
    const allUrls = await getAllUrls();
    const exists = allUrls.some((p) => p.alias === alias);
    if (exists) {
      throw new Error(`Alias "${alias}" already exists`);
    }
    const p = {
        alias: alias,
        url: url,
    };

    const urlCollection = await getCollection(URL_COLLECTION);
    const res = await urlCollection.insertOne({ ...p });

    if (!res.acknowledged) {
        throw new Error("DB insert failed");
    }

    return { ...p, id: res.insertedId.toHexString() };

}