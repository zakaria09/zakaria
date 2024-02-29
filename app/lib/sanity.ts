import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";


export const client = createClient({
  apiVersion: "2024-02-18",
  dataset: "production",
  projectId: "wjf3uae7",
  useCdn: false,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
}