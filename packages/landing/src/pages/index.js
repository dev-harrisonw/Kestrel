import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from 'common/theme/agency';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, AgencyWrapper } from 'containers/Agency/agency.style';
import Navbar from 'containers/Agency/Navbar';
import BannerSection from 'containers/Agency/BannerSection';
import FeatureSection from 'containers/Agency/FeatureSection';
import AboutUsSection from 'containers/Agency/AboutUsSection';
import TestimonialSection from 'containers/Agency/TestimonialSection';
import VideoSection from 'containers/Agency/VideoSection';
import Footer from 'containers/Agency/Footer';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import FaqSection from 'containers/Agency/FaqSection';

const Main = () => {
	return (
		<ThemeProvider theme={agencyTheme}>
			<Fragment>
				{/* Start agency head section */}
				<Head>
				<title>Kestrel IT | Solutions & Support</title>
          		<meta name="Description" content="Kestrel IT Solutions & Support" />
          		<meta name="theme-color" content="#FABA60" />
					{/* Load google fonts */}
					<link
						href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
						rel="stylesheet"
					/>
				</Head>
				<ResetCSS />
				<GlobalStyle />
				{/* End of agency head section */}
				{/* Start agency wrapper section */}

				<AgencyWrapper>
					<Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
						<DrawerProvider>
							<Navbar />
						</DrawerProvider>
					</Sticky>
					<BannerSection />
					<FeatureSection />
					<AboutUsSection />
					<TestimonialSection />
					<VideoSection />
					<FaqSection />
					<Footer />
				</AgencyWrapper>

				{/* End of agency wrapper section */}
			</Fragment>
		</ThemeProvider>
	);
};
export default Main;
