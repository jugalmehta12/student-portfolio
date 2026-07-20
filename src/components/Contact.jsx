function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h3>Get In Touch</h3>
        <p>
          Have a question or want to work together? Feel free to reach out.
          I'd love to hear from you!
        </p>
        <div className="contact-details">
          <div className="contact-detail-item">
            <div className="contact-icon">&#9993;</div>
            <div>
              <div className="detail-label">Email</div>
              <div className="detail-value">jugalmehta2006@gmail.com</div>
            </div>
          </div>
          <div className="contact-detail-item">
            <div className="contact-icon">&#9742;</div>
            <div>
              <div className="detail-label">Phone</div>
              <div className="detail-value">+91 8200604274</div>
            </div>
          </div>
          <div className="contact-detail-item">
            <div className="contact-icon">&#9873;</div>
            <div>
              <div className="detail-label">Location</div>
              <div className="detail-value">Kutch, Gujarat, India</div>
            </div>
          </div>
        </div>
      </div>
      <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); e.target.reset(); }}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="John Doe" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="john@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="How can I help you?" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Write your message here..." required />
        </div>
        <button type="submit" className="form-submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
