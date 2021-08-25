import  React ,{ useEffect, useState } from 'react';
import { Card,Button } from "react-bootstrap"
import { getPhoto } from '../redux/action';
import { useSelector,useDispatch } from "react-redux";
const Post=()=>{


    const [dataaa,setDataaa]=useState();
    const dispatch=useDispatch()
    const data=useSelector((state)=>{
        console.log('imagedata',state.users.users)
        return state.users.users
    })

    console.log("dddhdjd//",data)
   
   
    

    useEffect(() => {
        dispatch(getPhoto())
    })

    return(
        <div className="container-fluid">
{/* <h1>post</h1> */}

<div className="row">
{data  && data.map((photo,index)=>{
    console.log("ddddd",photo)
    if(index<5){
   return(
<div className="col-sm-3">
       
               <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src={photo.url}
     style={{height:"180px"}} />
     <Card.Body>
       <Card.Title>{photo.title}</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the bulk of
         the card's content.
       </Card.Text>
       <Button  variant="primary">Upload Image</Button>
     </Card.Body>
   </Card>
   
   </div>
   
   
   )
   }
   })}
   </div>
</div>
    )
}
export default Post;