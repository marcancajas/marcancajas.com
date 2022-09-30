import Head from "next/head";
import { useState ,useEffect} from "react";
// import PanelContent from "../components/PanelContent";
import {dataImage } from "../utilits";
// import Cursor from "./Cursor";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import ModalBox from "./ModalBox";
import ModalCV from "./ModalCV";
import Nav from "./Nav";
import Overlay from "./Overlay";
import RightBar from "./RightBar";

const Layout = ({ children }) => {
  useEffect(() => {
    dataImage();
  });
  
  const [isResume, setResume] = useState(false);
  const resumeTrueFalse = () => {
    document.querySelector("body").classList.toggle("resume-opened")
  }

  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => {document.querySelector("body").classList.toggle("rightbar-opened")}
 
  

  
  return (
    <>
      <Head>
        <title>Deebo | Personal Portfolio React NextJS Template</title>
      </Head>
        <div className="deebo_fn_main">
          <Overlay />
          <ModalBox />
          <ModalCV resumeTrueFalse={resumeTrueFalse} />
          <RightBar toggleTrueFalse={toggleTrueFalse} />
          <div className="deebo_fn_wrapper">
            {/* Deebo Page */}
            <div className="deebo_page">
              <Nav toggleTrueFalse={toggleTrueFalse} />
              <HeroHeader resumeTrueFalse={resumeTrueFalse} />
              <div className="main">
                {children}
              </div>
              <Footer />

            </div>
            {/* Totop Button */}
            <a href="#" className="deebo_fn_totop"></a>
            {/* /Totop Button */}
          </div>
        </div>
    </>
  );
};

export default Layout;
