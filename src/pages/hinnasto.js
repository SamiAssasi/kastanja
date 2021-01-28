import * as React from "react";
import { ContentfulRichText } from "../components/contentfulRichText";
import Layout from "../components/Layout";

// markup
const Pricing = ({ data }) => {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-32">
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
