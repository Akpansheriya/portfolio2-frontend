import axios from "axios";
import React, { useState,useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, Zoom, toast } from "react-toastify";
import Thanks from "../ThankYou/Thanks";
function Model({ show, handleClose }) {
  const fileInputRef = useRef();
  const [loading,setLoading] = useState()
  const [file, setFile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    detail: "",
    profile: "",
    education: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFile({
      ...file,
      [e.target.name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true)
    let formData = new FormData();

 
    formData.append("resume", fileInputRef.current.files[0]);

    formData.append("firstName", file.firstName);
    formData.append("lastName", file.lastName);
    formData.append("phone", file.phone);
    formData.append("email", file.email);
    formData.append("profile", e.target.profile.value);
    formData.append("applyFor", e.target.applyFor.value);
    formData.append("experienceYear", e.target.experienceYear.value);
    formData.append("experienceMonth", e.target.experienceMonth.value);
    formData.append("education", file.education);
    formData.append("detail", file.detail);
   
  await axios
      .post("http://3.108.143.134:8000/upload", formData)
      .then((res) => {
        setLoading(false)
        if(res.data){
          handleClose();
          toast(<Thanks/> , {
            position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
          });

          setFile({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            detail: "",
            profile: "",
            education: "",
          });
        }
      })
      .catch((err) => 
      {
        setLoading(false)
        toast(err.message, {
          position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
        })
      }
      );
  };

  return (
    <div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Apply Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <div>
                  <form onSubmit={submit} className="row">
                    <div className="col-md-6 mb-4 ">
                      <p className="form-p">
                        First Name<sup>*</sup>
                      </p>
                      <input
                        oninput="this.setCustomValidity('')"
                        required
                        oninvalid="this.setCustomValidity('Enter Your firstname')"
                        autocomplete="off"
                        onChange={handleChange}
                        type="text"
                        className="form-control new-form"
                        name="firstName"
                        value={file.firstName}
                      />
                    </div>
                    <div className="col-md-6 mb-4 ">
                      <p className="form-p">
                        Last Name<sup>*</sup>
                      </p>
                      <input
                        oninput="this.setCustomValidity('')"
                        required
                        oninvalid="this.setCustomValidity('Enter Your lastname')"
                        autocomplete="off"
                        type="text"
                        onChange={handleChange}
                        className="form-control  new-form"
                        name="lastName"
                        value={file.lastName}
                      />
                    </div>
                    <div className="col-md-6 mb-4 ">
                      <p className="form-p">
                        Phone Number<sup>*</sup>
                      </p>
                      <input
                        autocomplete="off"
                        type="number"
                        onChange={handleChange}
                        className="form-control  new-form"
                        name="phone"
                        pattern="[0-9]{10}"
                        oninput="this.setCustomValidity('')"
                        required
                        oninvalid="this.setCustomValidity('Enter Your phone nuumber')"
                        value={file.phone}
                      />
                    </div>
                    <div className="col-md-6 mb-4 ">
                      <p className="form-p">Email</p>
                      <input
                        autocomplete="off"
                        type="email"
                        oninput="this.setCustomValidity('')"
                        required
                        oninvalid="this.setCustomValidity('Enter Your email')"
                        onChange={handleChange}
                        className="form-control  new-form"
                        name="email"
                        
                        value={file.email}
                      />
                    </div>
                    <div className="col-md-6 mb-4 ">
                      <p className="form-p">
                        Profile<sup>*</sup>
                      </p>
                      <div className="">
                        <select className="new-form form-control" name="profile"   oninput="this.setCustomValidity('')"
                        required
                        oninvalid="this.setCustomValidity('select your profile status')">
                          <option value="">---</option>
                          <option value="Experience">Experience</option>
                          <option value="Fresher">Fresher</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 ">
                      <p className="form-p">
                        Apply For<sup>*</sup>
                      </p>
                      <select className="form-control  new-form" name="applyFor"    oninput="this.setCustomValidity('')"
                        required
                        oninvalid="this.setCustomValidity('select your profile status')">
                        <option value="">---</option>
                        <option value="Flutter">Flutter Developer</option>
                        <option value="android">Android Developer</option>
                        <option value="wordpress">WordPress Developer</option>
                        <option value="Node">NodeJs Developer</option>
                        <option value="React">ReactJs Designer</option>
                        <option value="Laravel">Laravel Developer</option>
                        <option value="Angular">Angular Developer</option>
                        <option value="React Native">
                          React Native Developer
                        </option>
                        <option value="Ios">Ios Developer</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4 ">
                      <p className="form-p">
                        Experience Year<sup>*</sup>
                      </p>
                      <select
                        className="form-control  new-form"
                        name="experienceYear"
                        oninput="this.setCustomValidity('')"
                        required
                        oninvalid="this.setCustomValidity('select exp year')"
                      >
                        <option value="">---</option>
                        <option value="0 Year">0 Year</option>
                        <option value="1 Year">1 Year</option>
                        <option value="2 Year">2 Year</option>
                        <option value="3 Year">3 Year</option>
                        <option value="4 Year">4 Year</option>
                        <option value="5 Year">5 Year</option>
                        <option value="6 Year">6 Year</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4 ">
                      <p className="form-p">
                        Experience Month<sup>*</sup>
                      </p>
                      <select
                        className="form-control  new-form"
                        name="experienceMonth"
                        oninput="this.setCustomValidity('')"
                        required
                        oninvalid="this.setCustomValidity('select exp month')"
                      >
                        <option value="">---</option>
                        <option value="0 Month">0 Month</option>
                        <option value="1 Month">1 Month</option>
                        <option value="2 Month">2 Month</option>
                        <option value="3 Month">3 Month</option>
                        <option value="4 Month">4 Month</option>
                        <option value="5 Month">5 Month</option>
                        <option value="6 Month">6 Month</option>
                        <option value="7 Month">7 Month</option>
                        <option value="8 Month">8 Month</option>
                        <option value="9 Month">9 Month</option>
                        <option value="10 Month">10 Month</option>
                        <option value="11 Month">11 Month</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-4 ">
                      <p className="form-p">
                        Education<sup>*</sup>
                      </p>
                      <input
                        oninput="this.setCustomValidity('')"
                        required
                        oninvalid="this.setCustomValidity('Enter Your education')"
                        autocomplete="off"
                        type="text"
                        onChange={handleChange}
                        className="form-control  new-form"
                        name="education"
                        value={file.education}
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <p className="form-p">
                        Upload Resume<sup>*</sup>
                      </p>
                      <input
                        oninput="this.setCustomValidity('')"
                        required
                        oninvalid="this.setCustomValidity('upload your resume')"
                        id="file"
                      
                        ref={fileInputRef}
                        type="file"
                        className="form-control  new-form"
                        name="resume"
                      />
                      <p className="error"></p>
                    </div>
                    <div className="col mb-4">
                      <p className="form-p">
                        Details<sup>*</sup>
                      </p>
                      <textarea
                        oninput="this.setCustomValidity('')"
                        required
                        oninvalid="this.setCustomValidity('Enter Your details')"
                        onChange={handleChange}
                        className="form-control details-area  new-form"
                        name="detail"
                        value={file.detail}
                        type="text"
                      ></textarea>
                    </div>
                    <div className="col-md-12 mb-4" style={{textAlign:"center"}}> 
                    <Button size="lg" variant="secondary" type="submit" target="_blank" rel="noopener noreferrer">
                  {loading ? "Loading..." : "submit"}
            
          </Button>
          </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
       
      </Modal>
      <ToastContainer
      transition={Zoom}
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  );
}

export default Model;
