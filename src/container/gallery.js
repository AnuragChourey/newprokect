import React, { useState } from "react";
// import Header from "../hoc/layout/component/header";
// import Footer from "../hoc/layout/component/footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) 
      );
    }
  };
  const renderPhotos = (source) => {
    console.log("source: ", source.length);
    if(source.length===0){
        return <h1>No Image Found</h1>
    }
    else{
    return source.map((photo) => {
      console.log("imagedata",photo)
      return <img src={photo} alt="" key={photo} />;
    });
  }
  };

  return (
    <>
    {/* <Header/> */}
    <div className="app_heading">
      <div className="heading">React Multiple Images Preview</div>
      <div>
        <input type="file" id="file" multiple onChange={handleImageChange} />
        <div className="label-holder">
          <label htmlFor="file" className="label">
           
            <FontAwesomeIcon className ='font-awesome' icon={faCamera} />


          </label>
        </div>
        <div className="result">{renderPhotos(selectedFiles)}</div>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
};
export default Gallery;