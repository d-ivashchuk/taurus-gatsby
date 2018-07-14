import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a href="mailto:taurus@gmail.com" className="icon alt fa-envelope">
              <span className="label">Email</span>
            </a>
            <a href="tel:+380991982788" className="icon alt fa-mobile">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy;Taurus logistics</li>
        </ul>
      </section>
    )
  }
}

export default Footer
