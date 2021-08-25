import React from "react";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const Footer = () => {
  return (
    < div className="footer_css">
      <MDBFooter className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.google.com"> Google.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;