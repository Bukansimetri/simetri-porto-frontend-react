import React, { Fragment } from 'react';
import Head from 'next/head';
import Script from 'next/script'; // Import Script dari Next.js
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { portfolioTheme } from 'common/theme/portfolio';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Portfolio/portfolio.style';

import BannerSection from 'containers/Portfolio/Banner';
import Navbar from 'containers/Portfolio/Navbar';
import PortfolioShowcase from 'containers/Portfolio/PortfolioShowcase';
import ProcessSection from 'containers/Portfolio/Process';
import SkillSection from 'containers/Portfolio/Skill';
import CallToAction from 'containers/Portfolio/CallToAction';
import ContactSection from 'containers/Portfolio/Contact';
import Footer from 'containers/Portfolio/Footer';

const Portfolio = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <Head>
          <title>Simetri Studio | Engineering Digital Balance</title>
          <meta name="Description" content="Engineering Digital Balance" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
            rel="stylesheet"
          />
        </Head>

        {/* Meta Pixel Code */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '733741435746233');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=733741435746233&ev=PageView&noscript=1"
          />
        </noscript>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <PortfolioShowcase />
          <ProcessSection />
          <SkillSection />
          <CallToAction />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Portfolio;