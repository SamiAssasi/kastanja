import * as React from "react";
import { ContentfulRichText } from "../components/contentfulRichText";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

// markup
const Tuotesarjat = ({ data }) => {
  return (
    <Layout title={data.contentfulPage.title}>
      <ContentfulRichText document={data.contentfulPage.sisalto} />
    </Layout>
  );
};

export const query = graphql`
  query tuoteQuery {
    contentfulPage(slug: { eq: "tuotesarjat" }) {
      sisalto {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            fixed(width: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
      title
      sys {
        contentType {
          sys {
            id
          }
        }
      }
    }
  }
`;

export default Tuotesarjat;
