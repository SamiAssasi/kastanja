import * as React from "react";
import { ContentfulRichText } from "../components/contentfulRichText";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
// markup
const Pricing = ({ data }) => {
  return (
    <Layout title={data.contentfulPricing.title}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-32">
        <div>
          <ContentfulRichText document={data.contentfulPricing.left} />
        </div>
        <div>
          <ContentfulRichText document={data.contentfulPricing.right} />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query priceQuery {
    contentfulPricing {
      title
      left {
        raw
      }
      right {
        raw
      }
    }
  }
`;

export default Pricing;
