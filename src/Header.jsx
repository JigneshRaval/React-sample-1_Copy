import React from 'react';

// Navigation Component
class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/users">Users</a></li>
        </ul>
      </nav>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navigation />
      </header>
    )
  }
}

export default Header;
