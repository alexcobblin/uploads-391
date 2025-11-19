import getCollection, { URL_COLLECTION } from "@/db";
import { UrlProps } from "@/types"

export default async function getAllUrls(): Promise<UrlProps[]> {
    const postCollection = await getCollection(URL_COLLECTION);
    const data = await postCollection.find().toArray()

    const page: UrlProps[] = data.map((p) => ({
        id: p._id.toHexString(),
        alias: p.alias,
        url: p.url,
    }));
    return page.reverse();
}