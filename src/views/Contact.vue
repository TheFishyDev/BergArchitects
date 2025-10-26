<template>
  <div class="contact">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Get In Touch</h1>
        <p>We'd love to hear about your project</p>
      </div>
      <div class="overlay"></div>
    </section>

    <!-- Contact Content -->
    <section class="section contact-section">
      <div class="container">
        <div class="contact-container">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2>Contact Information</h2>
            <p>Have questions or ready to start your project? Reach out to us using the information below or fill out the contact form.</p>
            
            <div class="info-item">
              <div class="info-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="info-content">
                <h3>Our Office</h3>
                <p>123 Design Street<br>Architecture District<br>New York, NY 10001</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="info-content">
                <h3>Phone</h3>
                <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                <p><a href="tel:+15559876543">+1 (555) 987-6543</a></p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="info-content">
                <h3>Email</h3>
                <p><a href="mailto:info@bergarchitects.com">info@bergarchitects.com</a></p>
                <p><a href="mailto:support@bergarchitects.com">support@bergarchitects.com</a></p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="info-content">
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br>
                Saturday: 10:00 AM - 4:00 PM<br>
                Sunday: Closed</p>
              </div>
            </div>
            
            <div class="social-links">
              <h3>Follow Us</h3>
              <div class="social-icons">
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="contact-form-container">
            <div class="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and our team will get back to you as soon as possible.</p>
            </div>
            
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Your Name <span class="required">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  required
                  placeholder="John Doe"
                >
              </div>
              
              <div class="form-group">
                <label for="email">Email Address <span class="required">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  required
                  placeholder="john@example.com"
                >
              </div>
              
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="formData.phone" 
                  placeholder="+1 (555) 123-4567"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">Subject <span class="required">*</span></label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="formData.subject" 
                  required
                  placeholder="How can we help you?"
                >
              </div>
              
              <div class="form-group">
                <label for="message">Your Message <span class="required">*</span></label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  rows="5" 
                  required
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <div class="form-group">
                <label class="checkbox-label">
                  <input 
                    type="checkbox" 
                    v-model="formData.consent" 
                    required
                  >
                  <span>I agree to the <a href="#" class="privacy-link">Privacy Policy</a> and <a href="#" class="terms-link">Terms of Service</a> <span class="required">*</span></span>
                </label>
              </div>
              
              <button type="submit" class="btn btn-submit" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
                <i class="fas fa-paper-plane"></i>
              </button>
              
              <div v-if="formSubmitted" class="form-message success">
                <i class="fas fa-check-circle"></i>
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
              
              <div v-if="formError" class="form-message error">
                <i class="fas fa-exclamation-circle"></i>
                <p>{{ formError }}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Section -->
    <section class="map-section">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152090570536!2d-73.9878446845938!3d40.74844047932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuMiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
        width="100%" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy"
      ></iframe>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false
      },
      isSubmitting: false,
      formSubmitted: false,
      formError: ''
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.formError = '';
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Reset form
        this.formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          consent: false
        };
        
        this.formSubmitted = true;
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);
        
      } catch (error) {
        this.formError = 'An error occurred while sending your message. Please try again later.';
        console.error('Form submission error:', error);
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
/* Page Header */
.page-header {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  margin-bottom: 80px;
}

.page-header h1 {
  font-size: 3.5rem;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.page-header p {
  font-size: 1.5rem;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.page-header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
}

/* Contact Section */
.contact-section {
  padding: 100px 0;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: flex-start;
}

/* Contact Info */
.contact-info {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  padding-bottom: 15px;
}

.contact-info h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--primary-color);
}

.contact-info > p {
  margin-bottom: 30px;
  color: #666;
  line-height: 1.7;
}

.info-item {
  display: flex;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #eee;
}

.info-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.info-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(77, 166, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 18px;
  margin-right: 20px;
  flex-shrink: 0;
}

.info-content h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #333;
}

.info-content p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.info-content a {
  color: #555;
  transition: color 0.3s ease;
  text-decoration: none;
}

.info-content a:hover {
  color: var(--primary-color);
}

.social-links {
  margin-top: 40px;
}

.social-links h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #333;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
  color: #555;
  font-size: 16px;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-3px);
}

/* Contact Form */
.contact-form-container {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.form-header {
  margin-bottom: 30px;
  text-align: center;
}

.form-header h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
}

.form-header p {
  color: #666;
  margin: 0;
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #444;
}

.contact-form .required {
  color: #ff4d4d;
  margin-left: 3px;
}

.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form input[type="tel"],
.contact-form textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #333;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-form input[type="text"]:focus,
.contact-form input[type="email"]:focus,
.contact-form input[type="tel"]:focus,
.contact-form textarea:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(77, 166, 255, 0.2);
  outline: none;
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
}

.checkbox-label input[type="checkbox"] {
  margin-right: 10px;
  margin-top: 4px;
  cursor: pointer;
}

.privacy-link,
.terms-link {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.privacy-link:hover,
.terms-link:hover {
  text-decoration: underline;
}

.btn-submit {
  width: 100%;
  padding: 14px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.btn-submit:hover:not(:disabled) {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.btn-submit:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  opacity: 0.8;
}

.btn-submit i {
  font-size: 0.9rem;
}

/* Form Messages */
.form-message {
  padding: 15px;
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  line-height: 1.5;
}

.form-message i {
  margin-top: 2px;
  font-size: 1.2rem;
}

.form-message p {
  margin: 0;
  font-size: 0.95rem;
}

.form-message.success {
  background-color: #e8f8f0;
  color: #28a745;
}

.form-message.error {
  background-color: #fee;
  color: #dc3545;
}

/* Map Section */
.map-section {
  width: 100%;
  height: 450px;
}

.map-section iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .contact-container {
    gap: 40px;
  }
  
  .contact-info,
  .contact-form-container {
    padding: 30px;
  }
}

@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .page-header {
    height: 350px;
    margin-bottom: 60px;
  }
  
  .page-header h1 {
    font-size: 2.8rem;
  }
  
  .info-item {
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  
  .social-links {
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .page-header {
    height: 300px;
    margin-bottom: 50px;
  }
  
  .page-header h1 {
    font-size: 2.2rem;
  }
  
  .page-header p {
    font-size: 1.2rem;
  }
  
  .contact-section {
    padding: 60px 0;
  }
  
  .form-header h2 {
    font-size: 1.8rem;
  }
  
  .contact-info h2 {
    font-size: 1.8rem;
  }
  
  .info-item {
    flex-direction: column;
  }
  
  .info-icon {
    margin-bottom: 15px;
  }
}

@media (max-width: 576px) {
  .page-header h1 {
    font-size: 1.8rem;
  }
  
  .contact-info,
  .contact-form-container {
    padding: 25px 20px;
  }
  
  .form-header h2 {
    font-size: 1.6rem;
  }
  
  .contact-info h2 {
    font-size: 1.6rem;
  }
  
  .btn-submit {
    padding: 12px 15px;
    font-size: 0.9rem;
  }
  
  .map-section {
    height: 350px;
  }
}
</style>
