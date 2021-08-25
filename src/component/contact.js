import { useState } from "react";
import { useHistory } from "react-router";
const Contact=()=>{
const [fields,setFields]=useState({})
const [errors,setErrors]=useState({})
    


    const history = useHistory()


  
   
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Form Submitted")
        // history.push('/gallery')
    }



    return(
<>        
<h1 className="contact_css">Welcome to Contact Page</h1>

<div class="container">
  <form onSubmit={handleSubmit} >

    <label for="fname">First Name</label>
    <input type="text"  id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input  type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>

    <input  type="submit" value="Submit"/>

  </form>
</div>
</>


    )
}
export default Contact;