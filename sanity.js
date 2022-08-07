import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "fmoa1ls7",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});


const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);



// para incluir cors a sanity:
// cd sanity 
// sanity cors add http://localhost:19006/


export default client; 