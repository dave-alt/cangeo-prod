import React from "react";

import Navbar from "../components/navbar";
import Home from "../components/home";
import Form from "../components/form";

import Footer from "../components/footer";
import Formfeedback from "../components/formfeedback";
import Trustfactors from "../components/trustfactors";
export default function Index() {
  return (
    <>
      <Navbar />
      <Home />
      <Trustfactors />
      <Form />
      <Formfeedback/>
      <Footer/>
    </>
  );
}
