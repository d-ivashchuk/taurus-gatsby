import React from 'react'
import Link from 'gatsby-link'
import '../assets/scss/main.scss'

import Navi from '../components/Navi.js'

import Footer from '../components/Footer.js'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <Navi />
        {children()}
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
}

export default Template
