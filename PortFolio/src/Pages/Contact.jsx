import React ,{useState}from 'react'

export default function Contact() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return (
   
      <div className="contact-page">

      <div className="contact-header">

        <p className="contact-subtitle">
          GET IN TOUCH
        </p>

        <h1>
          Let's <span>Connect</span>
        </h1>

        <p>
          Have a project idea, job opportunity, or just
          want to say hello? Feel free to contact me.
        </p>

      </div>


      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <h2>
            Let's Talk
          </h2>

          <p>
            I'm always interested in hearing about new
            projects and opportunities.
          </p>


          <div className="contact-item">

            <div className="contact-icon">
              📧
            </div>

            <div>
              <h3>Email</h3>

              <p>
                vksilambu14@gmail.com
              </p>
            </div>

          </div>


          <div className="contact-item">

            <div className="contact-icon">
              📱
            </div>

            <div>
              <h3>Phone</h3>

              <p>
                +91 90257 56596
              </p>
            </div>

          </div>


          <div className="contact-item">

            <div className="contact-icon">
              📍
            </div>

            <div>
              <h3>Location</h3>
                <p>2/99a,VKS Brothers Home,Andipatti</p>
              <p>
                Tiruvannamalai,Tamil Nadu.
              </p>
            </div>

          </div>


          <div className="social-links">

            <a href="https://github.com/vksilambu14-art" target="_blank">
              GitHub
            </a>

            <a href="#" target="_blank">
              LinkedIn
            </a>

          </div>

        </div>


        {/* Contact Form */}

        <div className="contact-form-container">

          <h2>
            Send Me a Message
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />

            </div>


            <div className="form-group">

              <label>
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="send-button"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}

