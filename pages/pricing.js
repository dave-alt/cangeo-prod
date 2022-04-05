import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Skyline from "../components/skyline";
import Footer from "../components/footer";
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";
import { useRouter } from "next/router";
export default function Pricing() {
  const router = useRouter();
  let basicComponents = [];
  let intermediateComponents = [];
  let advancedComponents = [];
  let digitalmarketingComponents = [];
  let ecommerceComponents = [];
  const basic = [
    "Free Domain",
    "6 Pages Hosting",
    "Business Email Id",
    "SEO Ready Website",
    "Mobile Friendly Website",
    "Unlimited Images and Videos",
    "Unlimited Bandwidth/Space",
    "24/7 Support",
  ];
  const intermediate = [
    "All from basic",
    "12 Pages",
    "Professional Logo",
    "UI/UX Design",
    "Fast/Server Side Rendering",
    "Additional Database Services",
  ];
  const digitalMarketing = [
    "Banner",
    "Logo/Mascot",
    "Graphic Design/Animation",
   
    "SEO/SMO",
    "Social Media Marketing",
    "Email Marketing",
    "Video Advertising",
    "Content Marketing",
    "Google Analytics/Adwords",
    "Facebook ads",
  ];
  const advanced = [
    "Digital Marketing/Web Development",
    "25 Pages",
    "All from INTERMEDIATE",
    "All from DIGITAL MARKETING",
  ];
  const ecommerce=[
    "Crawler Optimisation",
    "Search implementations",
    "Inventory Management",
    "Message handling",
    "Interactive CMS",
    "Cart Abandonement system",
    "Ad Integration",
    "Payment Integration",
    "SSL Certification",
    "Server Side Rendering",
    "Secure Payment Gateway"
  ]
  ecommerce.forEach((detail) => {
    ecommerceComponents.push(<PricingDetail>{detail}</PricingDetail>);
  });
  basic.forEach((detail) => {
    basicComponents.push(<PricingDetail>{detail}</PricingDetail>);
  });
  intermediate.forEach((detail) => {
    intermediateComponents.push(<PricingDetail>{detail}</PricingDetail>);
  });
  advanced.forEach((detail) => {
    advancedComponents.push(<PricingDetail>{detail}</PricingDetail>);
  });
  digitalMarketing.forEach((detail) => {
    digitalmarketingComponents.push(<PricingDetail>{detail}</PricingDetail>);
  });

  return (
    <>
      <Navbar />
      <div className="pricing">
        <PricingTable highlightColor="#198995">
          <PricingSlot
            buttonText="Get Quote"
            onClick={() => router.push("/#contact")}
            title="BASIC"
            priceText="Starts from $250 + $150 Annual"
          >
            {basicComponents}
          </PricingSlot>
          <PricingSlot
            buttonText="Get Quote"
            onClick={() => router.push("/#contact")}
            title="INTERMEDIATE"
            priceText="Starts from $550 + $150 Annual"
          >
          {intermediateComponents}
          </PricingSlot>
          <PricingSlot
            buttonText="Get Quote"
            onClick={() => router.push("/#contact")}
            title="DIGITAL MARKETING"
            priceText="Starts from $600 + $150 Annual"
          >
           {digitalmarketingComponents}
          </PricingSlot>
          <PricingSlot
            buttonText="Get Quote"
            onClick={() => router.push("/#contact")}
            title="E-COMMERCE"
            priceText="Starts from $1300 + $200 Annual"
          >
           {ecommerceComponents}
          </PricingSlot>
          
          <PricingSlot
            buttonText="Get Quote"
            onClick={() => router.push("/#contact")}
            title="ADVANCED"
            priceText="Starts from $1500 + $200 Annual"
          >
           {advancedComponents}
          </PricingSlot>
        </PricingTable>
      </div>
      
      <Footer/>
    </>
  );
}
