import * as React from "react";
import {
  BLOCKS,
  INLINES,
  //, MARKS, Document, Block
} from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import Img from "gatsby-image";

type Props = {
  document: RenderRichTextData<ContentfulRichTextGatsbyReference>;
};

function getObjectKeyArray(obj: any): string[] {
  if (typeof obj !== "object") return [];
  const arr: string[] = [];
  for (const key in obj) {
    arr.push(key);
  }
  return arr;
}

export const ContentfulRichText: React.FC<Props> = ({ document }: Props) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const data = node.data.target;
        console.log(data);

        if (!data) return;
        return <Img fixed={data.fixed} />;
      },

      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const entry = node.data.target;
        return <div>test</div>;
      },
    },
  };
  return <div>{renderRichText(document, options)}</div>;
};
