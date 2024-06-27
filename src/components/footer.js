import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4 text-center">
      <div className="container">
        &copy; {new Date().getFullYear()} Dylan Guidry. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;