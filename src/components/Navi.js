import React from 'react'
import Link from 'gatsby-link'

class Navi extends React.Component {
  render() {
    return (
      <div className="toolbar">
        <Link activClassName="active" exact to="/">
          Home
        </Link>

        <Link activClassName="active" exact to="/legal">
          Legal
        </Link>

        <Link activClassName="active" exact to="/news">
          News
        </Link>
        <Link activClassName="active" exact to="/photos">
          Photos
        </Link>
      </div>
    )
  }
}

export default Navi
