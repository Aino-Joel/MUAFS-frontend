import React from 'react'

function Footer() {
  return (
    <div>
      
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  />
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">our services</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">shipping</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>online shop</h4>
          <ul>
            <li>
              <a href="#">watch</a>
            </li>
            <li>
              <a href="#">bag</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>


        </div>
  )
}

export default Footer
