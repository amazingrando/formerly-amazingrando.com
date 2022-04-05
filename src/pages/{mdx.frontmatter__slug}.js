import * as React from 'react';
import PropTypes from 'prop-types'; // ES6
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const BlogPost = ({ data }) => (
  <div>
    <h1 className="text-3xl font-bold">{data.mdx.frontmatter.title}</h1>
    <p>{data.mdx.frontmatter.date}</p>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </div>
);

BlogPost.propTypes = {
  data: PropTypes.node,
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
