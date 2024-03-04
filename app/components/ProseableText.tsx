'use client'
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { EncodeDataAttributeCallback } from "@sanity/react-loader";
import Image from "next/image";
import { urlFor } from "../lib/sanity";

type Props = {
  value: PortableTextBlock[];
  sanity?: EncodeDataAttributeCallback;
};

const components = {
  types: {
    code: ({
      value,
    }: {
      value: { code: string; _type: string; language: string; key: string };
    }) => {
      return (
        <div className="shadow-lg">
          <pre>{value.code}</pre>
        </div>
      );
    },
  },
};

export default function ProseableText({ value, sanity }: Props) {
  let div: PortableTextBlock[] = [];
  return value.map((block, i, blocks) => {
    // Normal text blocks (p, h1, h2, etc.) — these are grouped so we can wrap them in a prose div
    if (block._type === "block") {
      div.push(block);

      // If the next block is also text, group it with this one
      if (blocks[i + 1]?._type === "block") return null;

      // Otherwise, render the group of text blocks we have
      const value = div;
      div = [];

      return (
        <div
          key={block._key}
          className="prose-xl prose-h2:max-w-[32ch] prose-h2:text-5xl prose-blue dark:prose-invert"
        >
          <PortableText
            value={value}
          />
        </div>
      );
    } else if (block._type === 'code') {
      return (
        <div>
          <PortableText
            value={value}
            components={components}
          />
        </div>
      );
    } else {
      // Non-text blocks (modules, sections, etc.) — note that these can recursively render text
      // blocks again
      return (
        <PortableText
          key={block._key}
          value={block}
          components={{
            types: {
              "section.image": ({ value }) => (
                <Image
                  src={urlFor(value).url()}
                  alt={'blog image'}
                  width={800}
                  height={400}
                  className='h-100 w-100'
                  style={{
                    objectFit: 'contain',
                  }}
                />
              ),
              // ...
            },
          }}
        />
      );
    }
  });
}