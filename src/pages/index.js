import * as React from "react";
import { ContentfulRichText } from "../components/contentfulRichText";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

// markup
const Index = ({ data }) => {
  return (
    <Layout title={data.contentfulPage.title}>
      <ContentfulRichText document={data.contentfulPage.sisalto} class="mr-4"/>
    </Layout>
  );
};

export const query = graphql`
  query etusivuQuery {
    contentfulPage(slug: { eq: "etusivu" }) {
      title
      sisalto {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            fixed(width: 300) {
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

export default Index;
