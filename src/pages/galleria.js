import React, { useState } from "react";
import Layout from "../components/Layout";
import Img from "gatsby-image";
import { graphql } from "gatsby";

// markup
const Galleria = ({ data }) => {
  return (
    <Layout title={data.contentfulGalleria.title}>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {data.contentfulGalleria.images.map((image) => (
          <div>
            <Img className="m-1" fluid={image.fluid} />
          </div>
        ))}
        </div>
    </Layout>
  );
};

export const query = graphql`
  query galleriaQuery {
    contentfulGalleria {
      title  
      images {
        fluid(maxHeight: 300, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default Galleria;
