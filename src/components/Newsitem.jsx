import React from "react";
import image from '../assets/image.avif'
const Newsitem = ({ title, description, src, url }) => {
  return (

        <div class="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img class="card-img-top" src={src?src:image} alt="Card image cap" style={{height:"200px",width:"330px"}} />
        <div class="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
          <p class="card-text">
           {description?description.slice(0,60):"News item description is available in the following format you can check out here"}
          </p>
          <a href={url} target="_blank" className="btn btn-primary">
                  Read More
                </a>
        </div>
      </div>
    
  );
};

export default Newsitem;
