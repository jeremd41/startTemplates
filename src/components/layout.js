import React from "react"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div>
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    )
  }
}

export default Layout
