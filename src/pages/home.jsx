import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import UserMenu from "../components/menu/user-menu";
import IntroBanner from "../components/home/intro-banner";
import PopularCategories from "../components/home/popular-categories";
import RecentRequirements from "../components/home/recent-requirements";
import OurWorkFlow from "../components/home/our-work-flow";
import Testimonials from "../components/home/test-monials";
import Counters from "../components/home/counters";

export default function Home() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate("/freelancerslist");
  };

  return (
    <div>
      <div id="wrapper">
        {/* <User/> */}
        <UserMenu />

        {/* Intro Banner
================================================== */}
        {/* add class "disable-gradient" to enable consistent background overlay */}
        <IntroBanner  navigateToContacts={navigateToContacts}/>

        {/* Content
================================================== */}

        {/* Popular Job Categories */}
        <PopularCategories />
        {/* Features Cities / End */}

        {/* Features Jobs */}
        <RecentRequirements />
        {/* Featured Jobs / End */}

        {/* Icon Boxes */}
        <OurWorkFlow />
        {/* Icon Boxes / End */}

        {/* Testimonials */}
        <Testimonials />
        {/* Testimonials / End */}

        {/* Counters */}
        <Counters />
        {/* Counters / End */}

        <Footer />
      </div>
      {/* Wrapper / End */}
    </div>
  );
}
