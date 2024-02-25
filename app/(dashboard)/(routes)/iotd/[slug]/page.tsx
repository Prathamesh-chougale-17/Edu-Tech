import { fullIdeaCard } from "@/sanity/sanity-util";
import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
    const query = `
    *[_type == "idea" && slug.current == '${slug}'] {
        title,
      "currentSlug": slug.current,
      content
      }[0]`;

    const data = client.fetch(query);
    return data;
}

export default async function BlogArticle({
    params,
}: {
    params: { slug: string };
}) {
    const data: fullIdeaCard = await getData(params.slug);
    console.log(data)

    return (
        <>
            {/* <h1>{data.title}</h1> */}
            {/* Use PortableText component to render data.content if necessary */}
            {/* <PortableText blocks={data.content} /> */}
            {/* <p>{data.conteawaitnt}</p> */}
            {/* <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
                <PortableText value={data.content} />
            </div> */}
            {/* write above code in responsive way and MORE ATTRACTIVE */}
            <div className="container mx-auto p-8">
                <h1 className="text-center text-3xl font-bold mb-8">{data.title}</h1>
                {/* <div className="coin-balance text-center text-2xl mb-4">coinBalance Coins</div> */}
                <div className="potd-container">
                    <div className="potd-item border-b border-gray-300 pb-4 mb-4">
                        <h2 className="text-xl font-semibold mb-2"><PortableText value={data.content} /></h2>
                    </div>
                </div>
            </div>
        </>
    );
}