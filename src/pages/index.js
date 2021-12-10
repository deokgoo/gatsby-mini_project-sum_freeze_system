import * as React from 'react';
import { Helmet } from 'react-helmet';
import Seo from '../components/Seo';
import DetailSection from '../components/DetailSection';
import InquirySection from '../components/InquirySection';
import IntroSection from '../components/IntroSection';
import PatentSection from '../components/PatentSection';
import ManuFacturingSection from '../components/ManuFacturingSection';
import '../style/main.scss';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <Seo></Seo>
      <IntroSection></IntroSection>
      <PatentSection></PatentSection>
      <ManuFacturingSection></ManuFacturingSection>
      <DetailSection></DetailSection>
      <InquirySection></InquirySection>
    </>
  )
}

export default LandingPage;
