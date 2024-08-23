import React from 'react';

import '../../assets/styles/ContactUs.css';
function ContactUs () 
{
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>



      <div className="d-flex ">
        <div className='ms-4 w-50 contact-details'>
        <div className="contact-item">
          <h3><i class="bi bi-geo-alt"></i> Address</h3>
          <p>Manish Nagar, Nagpur, Maharashtra-440015 </p>
        </div>

        <div className="contact-item">
          <h3><i class="bi bi-telephone"></i> Contact Number</h3>
          <p>+91 90000 70000</p>
          <p>+91 86689 70660</p>
          <p>+91 96073 32012</p>

        </div>

        <div className="contact-item">
          <h3><i class="bi bi-envelope"></i> Email ID</h3>
          <p>infinityfinance07@gmail.com</p>
        </div>
        </div>
        <div className=" w-50 text-center">
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14890.008431749513!2d79.05525046646123!3d21.092539087656238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf0e11540295%3A0xcc1644533d6481a6!2sManish%20Nagar%2C%20Somalwada%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723745648246!5m2!1sen!2sin "width="400" height="300">
          </iframe>
         </div> 
         </div>
         <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-whatsapp"></i></a>
          
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
           
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
            
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i class="bi bi-twitter"></i></a>
           
        </div>
      </div>
    </div>
    
  );
};

export default ContactUs;



