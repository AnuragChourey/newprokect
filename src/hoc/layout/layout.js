import React from "react";
import { withRouter } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
const Layout = (props) => {
  return (
    <div id="wrap" className="logSignup_wrap">

      <Header />

      {props.children}
      <Footer />

    </div>
  );
};

export default withRouter(Layout);
