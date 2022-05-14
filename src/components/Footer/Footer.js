import React from "react";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Get to know us</Heading>
            <FooterLink href="#">Lorem ipsum dolor</FooterLink>
            <FooterLink href="#">Lorem ipsum dolor</FooterLink>
            <FooterLink href="#">Lorem ipsum dolor</FooterLink>
            <FooterLink href="#">Lorem ipsum dolor</FooterLink>
            <FooterLink href="#">Lorem ipsum dolor</FooterLink>
          </Column>
          <Column>
            <Heading>Top cuisine</Heading>
            <FooterLink href="#">American</FooterLink>
            <FooterLink href="#">BBQ</FooterLink>
            <FooterLink href="#">Greek</FooterLink>
            <FooterLink href="#">Mexican</FooterLink>
            <FooterLink href="#">Thai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#"><img src="assets/instagram_icon.png" alt="instagram-icon" /> Instagram</FooterLink>
            <FooterLink href="#"> <img src="assets/facebook_icon.png" alt="facebook-icon" /> Facebook</FooterLink>
            <FooterLink href="#"> <img src="assets/twitter_icon.png" alt="twitter-icon" /> Twitter</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;