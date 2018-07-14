import React from 'react'
import Link from 'gatsby-link'

import seaworthiness from '../assets/pdf/seaworthiness.pdf'
import air_pollution from '../assets/pdf/air_pollution.pdf'
import fda_certificate from '../assets/pdf/fda_certificate.pdf'
import safety_certificate from '../assets/pdf/safety_certificate.pdf'

const SecondPage = () => (
  <div>
    <section className="main style2">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>We operate fully in accordance to the law</h2>
          </header>
          <p>
            Team of our lawyers ensures that every operation which involves
            crossing of boarders is executed in accordance with local laws and
            international conventions.
          </p>
        </div>
      </div>
    </section>
    <br />

    <section>
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Documents and permissions confirming our legal status </h2>
          </header>

          <ul className="legal-list">
            <li>
              <a className="icon  fa-file" target="_blank" href={seaworthiness}>
                Certificate of seaworthiness
              </a>
            </li>
            <li>
              <a
                className="icon alt fa-file"
                target="_blank"
                href={air_pollution}
              >
                Air pollution convention certificate
              </a>
            </li>
            <li>
              <a
                className="icon alt fa-file"
                target="_blank"
                href={safety_certificate}
              >
                Certificate of safety regulations
              </a>
            </li>
            <li>
              <a
                className="icon alt fa-file"
                target="_blank"
                href={fda_certificate}
              >
                Certificate of membership in FDA
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
)

export default SecondPage
