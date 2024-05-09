import React from "react";
import './Card.css';

import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

//import part

const Card = ({ datas }) => {
  //js part
  return (
    <>
      
      <div className="container">
      <h1 className="head py-4 ">React Price Card Task</h1>
        <div className="row">
          {datas.map((ele, index) => {
            return (
              <>
                <div className="col-lg-4">
                  <div key={index}>
                    <div className="card pb-2 hover-zoom">
                      <div className="card-body pb-0  ">
                        <h6 className="card-title text-muted text-center ">{ele.title}</h6>
                        <h2 className="card-price text-center ">{ele.price}</h2>
                        <hr />
                        <p><FaCheck />{ele.user}</p>
                        <p><FaCheck />{ele.storage}</p>
                        <p><FaCheck />{ele.project}</p>
                        <p><FaCheck />{ele.community}</p>
                        {ele.isprivateproj ? (<p><FaCheck />{ele.privateproj}</p>) : (<p className="text-muted"><IoMdClose />{ele.privateproj}</p>)}
                        {ele.isphonesupport ? (<p><FaCheck />{ele.phonesupport}</p>) : (<p className="text-muted"><IoMdClose />{ele.phonesupport}</p>)}
                        {ele.issubdomain ? (<p><FaCheck />{ele.subdomain}</p>) : (<p className="text-muted"><IoMdClose />{ele.subdomain}</p>)}
                        {ele.isreports ? (<p><FaCheck />{ele.reports}</p>) : (<p className="text-muted"><IoMdClose />{ele.reports}</p>)}
                         
                      </div>
                      <div className="card-footer ">
                        <button className="btn btn-primary">Button</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

// export part
export default Card;
