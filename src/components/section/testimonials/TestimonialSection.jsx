// import React from 'react';
// import './TestimonialSection.css';
// import placeholder1 from '../../../assets/images/author-1.png'; 
// import placeholder2 from '../../../assets/images/author-2.png';
// import placeholder3 from '../../../assets/images/author-3.png';
// import quote from "../../../assets/images/quote-image.png"

// const TestimonialSection = () => {
//   return (
//     <section className="testimonial-section">
//       <div className="testimonial-container">
//         <div className="quote-mark">
//             <img src={quote} alt="quote-mark" />
//         </div>
        
//         <div className="testimonial-content">
//           <p className="testimonial-quote">
//             But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain 
//             was born and I will give you a complete account.
//           </p>
          
//           <div className="testimonial-author">
//             <div className="author-images">
//               <div className="author-image-container">
//                 <img src={placeholder1} alt="Team member 1" className="author-image" />
//               </div>
//               <div className="author-image-container">
//                 <img src={placeholder2} alt="Team member 2" className="author-image" />
//               </div>
//               <div className="author-image-container">
//                 <img src={placeholder3} alt="Team member 3" className="author-image" />
//               </div>
//             </div>
            
//             <div className="author-info">
//               <h3 className="author-name">Tommy Andersen</h3>
//               <p className="author-title">CEO at Company</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;

import React from 'react';
import './TestimonialSection.css';
import placeholder1 from '../../../assets/images/author-1.png'; 
import placeholder2 from '../../../assets/images/author-2.png';
import placeholder3 from '../../../assets/images/author-3.png';
import quote from "../../../assets/images/quote-image.png";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="quote-mark">
          <img src={quote} alt="Quote" />
        </div>
        
        <div className="testimonial-content">
          <p className="testimonial-quote">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain 
            was born and I will give you a complete account.
          </p>
          
          <div className="testimonial-author">
            <div className="author-images">
              <div className="author-image-container">
                <img src={placeholder1} alt="Team member 1" className="author-image" />
              </div>
              <div className="author-image-container">
                <img src={placeholder2} alt="Team member 2" className="author-image" />
              </div>
              <div className="author-image-container">
                <img src={placeholder3} alt="Team member 3" className="author-image" />
              </div>
            </div>
            
            <div className="author-info">
              <h3 className="author-name">Tommy Andersen</h3>
              <p className="author-title">CEO at Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;