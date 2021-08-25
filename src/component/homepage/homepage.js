// import { useEffect } from 'react';
import  React ,{ useEffect, useState } from 'react';
import { useHistory } from "react-router";
import   img from '../../assest/img/img1.jpg'
import { Card,Button } from "react-bootstrap";
import { getPhoto } from "../../redux/action";
import { useSelector,useDispatch } from "react-redux";
// import Header from "../../hoc/layout/component/header";


// import Footer from "../../hoc/layout/component/footer";
import Sidebar from "../../hoc/layout/component/sidebar";

const Home = () => {
const [dataaa,setDataaa]=useState();
    const dispatch=useDispatch()
    const data=useSelector((state)=>{
        console.log('imagedata',state.users.users)
        return state.users.users
    })

    console.log("dddhdjd//",data)
   
    const history = useHistory()
    const handleClick = () => {
        history.push('/gallery')
    }

    useEffect(() => {
        dispatch(getPhoto())
        },[dataaa]);

    
    return (
        <>
        {/* <Header/> */}
        <div className="container-fluid">
            <div className="row">
            <h2 className="welcome_css">Welcome to Home Page</h2>
                <div className="col-md-2 sidebar_css">
                <Sidebar/> 
                </div>
                
               
            {/* <div className="parent_btn">
                <button className="submit_btn" >Click</button>
            </div> */}


{data  && data.map((photo,index)=>{
 console.log("ddddd",photo)
 if(index<5){
return(
  
  <div className="col-md-2 image_csss">
    
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={photo.url}
  style={{height:"180px"}} />
  <Card.Body>
    <Card.Title>{photo.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button  onClick={handleClick} variant="primary">Upload Image</Button>
  </Card.Body>
</Card>
</div>

)
}
})}
            {/* <figure class="snip1527">
  <div class="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample23.jpg" alt="pr-sample23" /></div>
  <figcaption>
    <div class="date"><span class="day">28</span><span class="month">Oct</span></div>
    <h3>The World Ended Yesterday</h3>
    <p>

      You know what we need, Hobbes? We need an attitude. Yeah, you can't be cool if you don't have an attitude.
    </p>
  </figcaption>
  <a href="#"></a>
</figure>
<figure class="snip1527 hover">
  <div class="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample24.jpg" alt="pr-sample24" /></div>
  <figcaption>
    <div class="date"><span class="day">17</span><span class="month">Nov</span></div>
    <h3>An Abstract Post Heading</h3>
    <p>

      Sometimes the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.
    </p>
  </figcaption>
  <a href="#"></a>
</figure>
<figure class="snip1527">
  <div class="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample25.jpg" alt="pr-sample25" /></div>
  <figcaption>
    <div class="date"><span class="day">01</span><span class="month">Dec</span></div>
    <h3>Down with this sort of thing</h3>
    <p>

      I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway.
    </p>
  </figcaption>
  <a href="#"></a>
</figure>
    
 */}


                

            </div>
        </div>

     

  
        </>
    )
}
export default Home;