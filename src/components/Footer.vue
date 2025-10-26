<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img :src="logoPath" alt="Berg Architects" class="logo-img" />
          <p>Designing spaces that inspire and endure.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
          </div>
        </div>
        
        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        
        <div class="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><i class="fas fa-map-marker-alt"></i> 123 Design Street, Architecture District, 10001</li>
            <li><i class="fas fa-phone"></i> +1 (555) 123-4567</li>
            <li><i class="fas fa-envelope"></i> info@bergarchitects.com</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Berg Architects. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      logoPath: '',
      currentYear: new Date().getFullYear()
    }
  },
  mounted() {
    // Use import.meta.glob to get the hashed filename
    const modules = import.meta.glob('@/assets/images/BergArchitect.jpg', { eager: true });
    this.logoPath = modules['/src/assets/images/BergArchitect.jpg'].default;
  }
}
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo {
  margin-bottom: 20px;
}

.footer-logo .logo-img {
  height: 60px;
  width: auto;
  margin-bottom: 15px;
  filter: brightness(0) invert(1);
}

.footer-logo p {
  color: #aaa;
  margin-bottom: 20px;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fff;
  font-size: 16px;
  transition: var(--transition);
}

.social-links a:hover {
  background-color: var(--primary-color);
  transform: translateY(-3px);
}

.footer h3 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li,
.footer-contact li {
  margin-bottom: 12px;
}

.footer-links a,
.footer-contact a {
  color: #aaa;
  transition: var(--transition);
  display: block;
}

.footer-links a:hover {
  color: var(--primary-color);
  padding-left: 5px;
}

.footer-contact li {
  display: flex;
  align-items: flex-start;
  color: #aaa;
  margin-bottom: 15px;
  line-height: 1.5;
}

.footer-contact i {
  color: var(--primary-color);
  margin-right: 10px;
  margin-top: 5px;
  min-width: 16px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  color: #777;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-logo,
  .footer-links,
  .footer-contact {
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-contact li {
    justify-content: center;
  }
}
</style>
