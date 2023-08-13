import React, { useEffect, useRef, useState } from 'react'
import styles from "./Testimonials.module.scss";
import { Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
function Testimonials(props) {
  
const TESTIMONIAL_DELAY = 3000;

    const { testimonialData } = props;
    const refFeedbackParentDiv = useRef(null);
    const refButtonsParentDiv = useRef(null);
    const timeoutRef = useRef(null);
    const [delay, setDelay] = useState(100);
    const [index, setIndex] = useState(0);
  
    useEffect(() => setDelay(TESTIMONIAL_DELAY), []);
  
    useEffect(() => {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === props.testimonialData.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => clearTimeout(timeoutRef.current);
    }, [props.testimonialData.length, index, delay]);
  
    const dotsHelper = (idx) => {
      if (refButtonsParentDiv.current === null) return;
  
      if (index === idx) {
        const arr2 = [...refFeedbackParentDiv.current.children];
  
        arr2.forEach((el, i) => {
          if (document.querySelector(`.feedbackText--${i}`))
            document
              .querySelector(`.feedbackText--${i}`)
              .classList.add(styles["not-visible"]);
        });
  
        arr2[index + 1].classList.remove(styles["not-visible"]);
  
        return styles["myDot--active"];
      }
    };
  
    const dotClickHandler = (arr, indx) => {
      setIndex(indx);
      arr.forEach((_, i) => {
        document
          .querySelector(`.feedbackText--${i}`)
          .classList.add(styles["not-visible"]);
        document
          .querySelector(`.buttonDot${i}`)
          .classList.remove(styles["myDot--active"]);
      });
      document
        .querySelector(`.feedbackText--${indx}`)
        .classList.remove(styles["not-visible"]);
      document
        .querySelector(`.buttonDot${indx}`)
        .classList.add(styles["myDot--active"]);
    };
  return (
    <div  className={styles.test_main} id='Testimonials'>
       <Helmet>
        <title>we are the best it solution company with happy clients - Blackbull Technologies</title>
        <meta name="description" content="we are providing a best it solutions and ideas to cients for make their business successfull and grow their businesses,we have 50+ clients in last 3 years" />
        <meta name="keywords" content="happy clients,company with happy clients,best it solution company,best it solution company in surat, best it company in surat" />
        </Helmet>
         <Row>
        <h1 className="main-heading">Our Testimonials</h1>
        <h2 className="sub-heading"> grow your business with us </h2>
      </Row>
        
      <div className={`${styles["section-three-main-div"]} testimonial`} data-aos="zoom-in"  data-aos-duration="3000"> 
        <div
          ref={refFeedbackParentDiv}
          className={styles["section-three-sub-div-one"]}
        >
          <div
            className={`${styles["quotes-img"]} ${styles["quotes-img-right"]}`}
          />
          {testimonialData.map((el, i) => {
            return (
                <>
              <div
                key={i}
                className={`feedbackText--${i} ${styles["main-quotes-div"]} ${styles["not-visible"]}`}
              >
                <img  referrerpolicy="no-referrer" className={styles.img_main} src={el.photo} alt={el.author}/>
                <div className={styles.para}>{el.testimonial}</div>
                <div className={styles.subText}>{el.author}</div>
                <h5 className={styles.rating}>Rating</h5>
<span className={el.class1 ? `${styles.checked} fa fa-star ${styles.fa_star} ` : `fa fa-star ${styles.fa_star} `}></span>
<span className={el.class2 ? `${styles.checked} fa fa-star ${styles.fa_star} ` : `fa fa-star ${styles.fa_star} `} ></span>
<span className={el.class3 ? `${styles.checked} fa fa-star ${styles.fa_star} ` : `fa fa-star ${styles.fa_star} `}></span>
<span className={el.class4 ? `${styles.checked} fa fa-star ${styles.fa_star} ` : `fa fa-star ${styles.fa_star} `}></span>
<span className={el.class5 ? `${styles.checked} fa fa-star ${styles.fa_star} ` : `fa fa-star ${styles.fa_star} `}></span>
                <div className={styles.dots3} ref={refButtonsParentDiv}>
               {testimonialData.map((_, i, arr) => {
                 return (
                   <div
                     name='change testimonial'
                     key={i}
                     className={`buttonDot${i} ${styles.myDot} ${
                       index === i ? dotsHelper(i) : ""
                     }`}
                     onClick={() => dotClickHandler(arr, i)}
                   />
                 );
               })}
             </div>
                
              </div>
               
             </>
            );
          })}
          <div
            className={`${styles["quotes-img"]} ${styles["quotes-img-left"]}`}
          />
         
        </div>
        
      </div>
    </div>
  )
}

export default Testimonials