import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <p>Copyright {this.props.year}</p>
    )
  }
}
export default Footer;
