import * as React from "react";
import { ContentfulRichText } from "../components/contentfulRichText";
import Layout from "../components/Layout";

// markup
const Tuotesarjat = ({ data }) => {
  return (
    <Layout>
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
