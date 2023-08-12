import Head from "next/head";
import { Fragment, useEffect } from "react";
import {
  rsk_tm_moving_animation,
  aTagClick,
  dataImage,
  wowJsAnimation,
  aali_tm_moving_animation,
} from "../utilits";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Preloader from "./Preloader";

const Layout = ({ children, headName, dark }) => {
  useEffect(() => {
    dataImage();
    wowJsAnimation();
    aali_tm_moving_animation();
    aTagClick();
  }, []);

  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="I am Rittik Sadhukhan, a Freelancer and Front-end Developer with 3 years of experience. Specializing in Web Development, Graphic Design, and UI/UX Design. I create responsive websites with HTML5, CSS3, and JavaScript. Expertise in React.js for building modern and interactive user interfaces. I offer custom web solutions, e-commerce development, mobile app design, and branding services. With a focus on user-centric design, I integrate animations, illustrations, and data visualization to create visually appealing and engaging websites. Partner with me for international projects, global reach, and cross-cultural collaboration. Let's bring your ideas to life!"
        />
        <meta
          name="keywords"
          content="Rittik Sadhukhan, rittik sadhukhan, astarand,rittik, sadhukhan, AstarAnD-, Front-end Developer, Web Development, Freelancer, Graphic Designer, Portfolio, Responsive Design, User Experience (UX), HTML5, CSS3, JavaScript, React.js, UI/UX Design, Creative Design, Website Design, Mobile-First Development, Cross-Browser Compatibility, SEO-Friendly Design, User Interface (UI), Wireframing, Prototyping, International Clients, Global Reach, Remote Work, Cross-Cultural Collaboration, Multilingual Websites, Localization, International Standards, User-Centric Design, Custom Web Development, E-commerce Solutions, Mobile App Design, Branding, Animation, Illustration, Digital Marketing, Social Media Integration, Content Management Systems (CMS), Website Optimization, Accessibility, Responsive Web Design, Mobile Optimization, Progressive Web Apps (PWAs), Single Page Applications (SPAs), Microinteractions, Dark Mode Design, Voice User Interface (VUI), Chatbots, Augmented Reality (AR), Virtual Reality (VR), Motion Design, Data Visualization, Minimalist Design, Typography Trends, Illustrative Web Design, Neumorphism, Artificial Intelligence (AI) Integration, Cybersecurity, Sustainability in Web Design,"
        />
        <meta name="author" content="Rittik Sadhukhan" />
        <title>
          Rittik Sadhukhan | Front-End Developer Freelancer & Graphic Designer
        </title>
        <link rel="icon" type="image/x-icon" href="./img/logo/favicon.ico" />
      </Head>
      <Preloader />
      <div className="rsk_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu />
        <Header dark={dark} />
        {children}
        <Footer />
        <Cursor />
      </div>
    </Fragment>
  );
};

export default Layout;
