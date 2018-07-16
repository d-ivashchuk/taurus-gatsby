import React from 'react'
import Link from 'gatsby-link'

const newsPage = ({ data }) => {
  return (
    <div>
      <section>
        <header className="news-header">
          <h1>News</h1>
        </header>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link key={node.id} to={node.frontmatter.path}>
            <div className="news">
              <p className="date">{node.frontmatter.date.substring(0, 10)}</p>
              <p className="excerpt">{node.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default newsPage

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
