import getUrlByAlias from "../lib/getUrlByAlias";
import { redirect } from "next/navigation";

export default async function AliasPage({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;

  const post = await getUrlByAlias(alias);

  if (!post) {
    return redirect("/");
  }

  return redirect(post.url);
}
