import React from 'react'
import styled from 'styled-components';

const Foot = styled.footer`
  padding-top: 120px;
  p{
    text-align: center;
  }
  .footergrid {
    background-color: #87CEFA		;
    height: 100%;
    text-align: center;
    padding: 10px;
    h4 {
      color: ##000000	;
    }
    p {
      color: ##000000	;
      margin: 0px;
    }
    @media (min-width: 768px) {
      display:grid;
      grid-template-columns:repeat(2,1fr);
      padding:20px;
    }
    @media (min-width: 1024px) {
      display:grid;
      grid-template-columns:repeat(3,1fr);
    }
  }
`;
 const Year= new Date().getFullYear();

const Footer = () => (
  <Foot>
    <div className="footergrid">
      <div className="footer-about">
        <h4>About Us</h4>
        <p>RentX</p>
        <p>Ethereum Rental Marketplace </p>
        <p>With Escrow and KYC Services</p>
       
      </div>

      <div className="footer-news">
        <h4>Newsletter</h4>
        <p>Stay update with our latest</p>
      </div>

      <div className="footer-social">
        <h4>Follow Us</h4>
        <p>Let us be social</p>
        
      </div>
    </div>
    <p>
      &copy;{Year} , Mathai Puthiakunnel
    </p>
  </Foot>
);

export default Footer;
