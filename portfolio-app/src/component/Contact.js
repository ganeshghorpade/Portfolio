import React from "react";
import img from './contact.png';
import { useNavigate } from "react-router-dom";
const Contact = ()=>{
  const navigate = useNavigate();
    const GotoHome = ()=>{
        navigate('/');
    }
    return(
        <>
        <div className="main-box">
        <div className="container-fluid cont-box">
        
            <div className="row">
            <h2 className="text-center  mt-5 fw-bold c-headline">Send Me Message</h2>
                <div className="col col-lg-6 col-sm-12 col-12  text-center main-box t ">
                <div><img src={img} alt="" className="img-fluid c"></img></div>
                </div>
                <div className="col col-lg-6 col-sm-12 col-12  t main-box">
                    <div className="row con-box-in">
                    <form className="">
                    <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputFullname1" aria-describedby="FullnameHelp" placeholder="FullName"/>
  </div>

  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputPhone1" placeholder="Phone Number"/>
  </div>
  <div className="mb-3">
    <textarea type="text" className="form-control" id="exampleInputMessage1" placeholder="Message"/>
  </div>
  <button type="submit" onClick={GotoHome} className="btn-dark c-btn">Submit</button>
</form>

                    </div>

                </div>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Contact;