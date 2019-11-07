/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Form from './Form';
import SocialIcons from './SocialIcons';
// import UnderConstruction from './UnderConstruction';

import TealOrnamentURL from '../../dist/assets/images/TealOrnamentalDivider.svg';

const ContactGrid = styled.main`
  grid-area: main;
  grid-column: 2/3;
  grid-row: 2/3;

  display: grid;
  grid-template-rows: 13fr 2fr;
  grid-template-areas: "contactcontent"
                       "footer"
`;

const ContactContent = styled.div`
  grid-area: contactcontent;

  display: grid;
  grid-template-columns: 11fr 13fr;
  grid-template-rows: 2fr 5fr 3fr;
  /* grid-template-areas:  "contact-title contact-form-title"
                       "contact-address contact-form"
                       "contact-social contact-form"; */
  justify-items: center;

  background-color: white;
  border: 7px solid rgb(87, 11, 95);
  border-radius: 25px;
  height: 607.5px;
  padding-bottom: 20px;
  /* padding-right: 22px; */
  width: 100%;
`;

const ContactTitle = styled.div`
  /* grid-area: contact-title; */
  align-self: end;
  display: block;
  text-align: center;
  width: 330px;
  /* margin-top: 20px; */
`;

const ContactTitleText = styled.span`
  color: #06837A;
  font-family: AlexandriaFLF-Bold;
  font-size: 70px;
`

const ContactText = styled.div`
  color: ${({teal}) => teal ? '#06837A' : 'rgb(87, 11, 95)'};
  font-family: ${({bold}) => `AlexandriaFLF${bold ? '-bold' : ''}`};
  /* font-family: AlexandriaFLF-Bold; */
  font-size: ${({fontSize}) => fontSize};
  /* letter-spacing: -5px; */
  text-align: center;
  width: auto;
`

const ContactAddress = styled.div`
  /* grid-area: contact-address; */
  border-bottom: 2px dashed rgb(87, 11, 95);
  text-align: center;
  padding-bottom: 10px;
  width: 80%;
`;

const ContactSocial = styled.div`
  /* grid-area: contact-social; */
  align-items: center;
  margin-top: 10px;
  width: 60%;
`;

const ContactFormTitle = styled.h1`
  /* grid-area: contact-form-title; */
  align-self: center;
  color: #616161;
  font-family: ChandelleDisplay;
  font-size: 36px;
  line-height: 40px;
  /* margin-top: 24px; */
  text-align: center;
`;

const Contact = () => (
  <ContactGrid>
    <ContactContent>
      <ContactTitle>
        <ContactTitleText>CONTACT</ContactTitleText>
        <img src={TealOrnamentURL} width="100%" />
      </ContactTitle>
      <ContactFormTitle>Questions?<br />Shoot me an e-mail!</ContactFormTitle>
      <ContactAddress>
        <ContactText fontSize="54px" bold>LYANDRA SICA</ContactText>
        <ContactText fontSize="40px" bold>Creative Designer</ContactText><br />
        <ContactText fontSize="36px">413 Myrtle Avenue</ContactText>
        <ContactText fontSize="36px">West Islip, NY 11795</ContactText>
        <ContactText fontSize="36px">creative@seekadesign.com</ContactText>
        <ContactText fontSize="36px">631.605.5782</ContactText>
      </ContactAddress>

      <Form />

      <ContactSocial>
        <ContactText fontSize="28px" teal>FOLLOW. LIKE. SHARE.</ContactText>
        <SocialIcons big/>
        <ContactText fontSize="30px">@SeekADesign</ContactText>
      </ContactSocial>
    </ContactContent>
    <Footer>
      <SocialIcons />
    </Footer>
  </ContactGrid>
);

export default Contact;
