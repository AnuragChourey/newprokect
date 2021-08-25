
// const SideNavPage=()=>{
//     return(
//         <>
//         <h1>fhfhf</h1>
//         </>
        
//     )
// }

// export default SideNavPage;
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";


const Side = props => {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/"
            
            >
                <div className="sidebar-sticky"></div>
                <div className="nav_css">
                <Nav.Item >
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/user">users</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/post">post</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
            </div>
            
            </Nav>
          
        </>
        );
  };
  const Sidebar = withRouter(Side);
  export default Sidebar