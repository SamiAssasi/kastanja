import * as React from "react";
import { ContentfulRichText } from "../components/contentfulRichText";
import Layout from "../components/Layout";

// markup
const Index = ({ data }) => {
  return (
    <Layout>
      <ContentfulRichText document={data.contentfulPage.sisalto} />
    </Layout>
  );
};

export const query = graphql`
query etusivuQuery {
  contentfulPage(slug: { eq: "etusivu" }) {
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
