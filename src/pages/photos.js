import React, { Component } from 'react'
import Img from 'gatsby-image'

import photo01 from '../assets/photos/1.jpeg'
import photo02 from '../assets/photos/2.jpeg'
import photo03 from '../assets/photos/3.jpeg'
import photo04 from '../assets/photos/4.jpeg'
import photo05 from '../assets/photos/5.jpeg'
import photo06 from '../assets/photos/6.jpeg'
import photo07 from '../assets/photos/7.jpeg'
import photo08 from '../assets/photos/8.jpeg'
import photo09 from '../assets/photos/9.jpeg'
import photo10 from '../assets/photos/10.jpeg'

const photos = ({ data }) => {
  return (
    <div className="g-container">
      {data.allFile.edges.map(entry => (
        <Img
          className="photo"
          title="Header image"
          alt="Greek food laid out on table"
          sizes={entry.node.childImageSharp.sizes}
        />
      ))}
    </div>
  )
}

export default photos

export const query = graphql`
  query PhotosQuery {
    allFile(
      filter: {
        extension: { regex: "/(jpeg|jpg|gif|png)/" }
        sourceInstanceName: { eq: "photos" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
