import React, {useEffect, useState} from "react";
import Layout from "../src/layouts/Layout";
import About from "../src/components/About";
import Work from "../src/components/Work";
import Skills from "../src/components/Skills";
import Services from "../src/components/Services";
import Clients from "../src/components/Clients";
import Contact from "../src/components/Contact";
  
  export default function Index() {
    
    return (
    <>
    <Layout>
      <About/>
      <Clients/>
      <Work/>
      <Skills/>
      <Services/>
      <Contact/>
    </Layout>
    </>
    )
  }
  
