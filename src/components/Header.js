import React from 'react'
import logo from '../assets/logo/logo.svg'

class Header extends React.Component {
  render() {
    return (
      <section id="header">
        <div className="inner">
          <img src={logo} alt="alt" className="logo" />
          <h1>
            <strong>Taurus</strong> logistics
          </h1>
          <p>
            We own a vessel and engage in different activities connected with
            fishing and scientific expeditioning.
            <br />
          </p>
          <ul className="actions">
            <li>
              <a href="#one" className="button scrolly">
                Discover
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Header
