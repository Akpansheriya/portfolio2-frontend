import React, { useState } from "react";
import "./Contact.scss";
import { Form, Row } from "react-bootstrap";
import { ToastContainer, Zoom, toast } from "react-toastify";
import axios from "axios";
import Thanks from "../ThankYou/Thanks";
import { Helmet } from "react-helmet";
function Contact() {
const [loading, setLoading] = useState()

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const user = {
      name:data.name,
      email:data.email,
      subject:data.subject,
      phone:data.phone,
      message:data.message
    }

    axios.post("http://3.108.143.134:8000/contactUs",user).then((res) => {
      setLoading(false)
     if(res.data){
    
      toast(<Thanks/> , {
        position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
      })
      setData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      })
     }
    }).catch((err) => {
      setLoading()
      toast(err.message , {
        position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
      })
    })
  }

  return (
    <div id="ContactUs">
       <Helmet>
        <title>make a contact to best it company - Blackbull Technologies</title>
        <meta name="description" content="you can make contact with us through this form for consultant,make a contact to best it company for build your ideas" />
        <meta name="keywords" content=" contact to best it company, best it company,contact" />
        </Helmet>
      <section className="contact section-bg">
        <div className="container">
          <Row>
            <h1 className="main-heading">Contact Us</h1>
            <h2 className="sub-heading"> we are the best it solution company </h2>
          </Row>

          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up" data-aos-delay="100"
            >
              <div className="info-box mb-4">
                <i className="fa-solid fa-location-dot"></i>
                <h3>Our Address</h3>
                <p>
                  228, Ambika pinnacle, mota varchha, near lajamani, Surat, Gujarat
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up" data-aos-delay="200"
            >
              <div className="info-box  mb-4">
              <a  href="mailto:blackbulltechnology@gmail.com"> <i className="fa-solid fa-envelope"></i></a>
                <h3>Email Us</h3>
                <p>blackbulltechnology@gmail.com</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up" data-aos-delay="300"
            >
              <div className="info-box  mb-4">
                <i className="fa-solid fa-phone"></i>
                <h3>Call Us</h3>
                <a href="tel:+91 8000698357" ><p>+91 8000698357</p></a>
                {/* <a href="tel:+91 9978671070"> <p>+91 9978671070</p></a> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-6 "
              data-aos="fade-up" data-aos-delay="1000"
            >
              <iframe
              
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8391874517083!2d72.88529027453576!3d21.238224580464003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0da8790d65%3A0xc0e25a18cf9ee103!2sBlackBull%20Technologies!5e0!3m2!1sen!2sin!4v1688536237652!5m2!1sen!2sin"
                style={{ border: "0", width: "100%", height: "384px" }}
              
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-up" data-aos-delay="1000"
            >
              <Form onSubmit={handleSubmit} role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      value={data.email}
                      onChange={handleChange}
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="number"
                    className="form-control"
                    value={data.phone}
                    onChange={handleChange}
                    name="phone"
                    id="subject"
                    placeholder="phone"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={data.subject}
                    onChange={handleChange}
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    type="text"
                    className="form-control"
                    value={data.message}
                    onChange={handleChange}
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              
                <div className="text-center">
                 <button type="submit" target="_blank" rel="noopener noreferrer"> { loading ? "Loading..." : "Send Message "}</button>
                
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
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

export default Contact;
