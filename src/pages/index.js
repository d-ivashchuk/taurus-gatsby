import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

import news01 from '../assets/images/news01.jpg'
import vessel01 from '../assets/images/vessel01.jpg'
import vessel02 from '../assets/images/vessel02.jpg'

class Homepage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <div>
        <Helmet title={siteTitle} />
        <Header />
        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  Our vessel is equipped with modern technologies and manned by
                  qualified crew
                </h2>
              </header>
              <p>
                We are ready to face any challenges, wether it involves fishing
                in the complicated ice conditions or delivering scientists and
                supplies to antarctic bases.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <img src={vessel01} alt="" />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>
                  Absolute readiness to take on the repsponsibilities for
                  execution of set objectives
                </h2>
              </header>
              <p>
                We supply door-to-door services and guarantee that all the given
                tasks will be successfully acomplished accroding to the provided
                schedule. Taurus logistics has an extensive experience of
                working as a subcontractor and offers comprehensive approach to
                solving each particular work-case.
              </p>
            </div>
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Additional information</h2>
              </header>
              <p>We are ready to answer your specific questions!</p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={vessel02} alt="" />
              </span>
              <h3>Photos</h3>
              <p>Pictures of vessel and equipment</p>
              <ul className="actions">
                <li>
                  <Link to="/photos" className="button">
                    more
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={news01} alt="" />
              </span>
              <h3>Certificates and permissions</h3>
              <p>Legal materials that regulate our operations</p>
              <ul className="actions">
                <li>
                  <Link to="/legal" className="button">
                    more
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={news01} alt="" />
              </span>
              <h3>News</h3>
              <p>What we do and how we do it?</p>
              <ul className="actions">
                <li>
                  <Link to="/news" className="button">
                    more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="four" className="main style2 special">
          <div className="container">
            <header className="major">
              <h2>Interested in working with us?</h2>
            </header>
            <p>Feel free to contact us at your convenience.</p>
            <ul className="actions uniform">
              <li>
                <a href="mailto:taurus@gmail.com" className="button special">
                  Send us e-mail
                </a>
              </li>
              <li>
                <a href="#three" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

Homepage.propTypes = {
  route: React.PropTypes.object,
}

export default Homepage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
