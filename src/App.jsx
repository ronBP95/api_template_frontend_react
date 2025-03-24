import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>MyWebsite</div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <header>
        <h1>Welcome to My Minimalist Page</h1>
      </header>
      <section>
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>
      <footer>
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;