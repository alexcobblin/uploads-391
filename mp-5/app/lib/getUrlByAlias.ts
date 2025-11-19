import getCollection, { URL_COLLECTION } from "@/db";
import { UrlProps } from "@/types";

export default async function getUrlByAlias(
    alias: string,
): Promise<UrlProps | null> {
    const urlsCollection = await getCollection(URL_COLLECTION);
    const data = await urlsCollection.findOne({ alias });

    if (!data) return null;

    return {
        id: data.id,
        alias: data.alias,
        url: data.url,
    };
}