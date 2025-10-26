<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Shaping the Future of Architecture</h1>
        <p>Innovative designs that blend form, function, and sustainability</p>
        <router-link to="/projects" class="btn">View Our Work</router-link>
      </div>
      <div class="hero-overlay"></div>
    </section>

    <!-- Featured Projects -->
    <section class="section featured-projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          <div 
            v-for="(project, index) in featuredProjects" 
            :key="index" 
            class="project-card"
            :style="{ backgroundImage: `url(${project.image})` }"
          >
            <div class="project-overlay">
              <h3>{{ project.title }}</h3>
              <p>{{ project.type }}</p>
              <router-link :to="`/projects/${project.id}`" class="btn btn-secondary">View Project</router-link>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/projects" class="btn">View All Projects</router-link>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">Crafting Timeless Architecture</h2>
            <p>At Berg Architects, we believe that great architecture is born from a deep understanding of our clients' needs, the environment, and the latest technological advancements. Our team of passionate architects and designers work together to create spaces that inspire and endure.</p>
            <p>With over 15 years of experience in the industry, we've delivered exceptional projects that have transformed communities and redefined skylines.</p>
            <router-link to="/about" class="btn">Learn More About Us</router-link>
          </div>
          <div class="about-image">
            <div class="image-container">
              <div class="image-placeholder"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services-section">
      <div class="container">
        <h2 class="section-title text-center">Our Services</h2>
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section testimonials">
      <div class="container">
        <h2 class="section-title text-center">What Our Clients Say</h2>
        <div class="testimonials-slider">
          <div class="testimonial" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-content">
              <p class="quote">"{{ testimonial.quote }}"</p>
              <div class="client-info">
                <div class="client-details">
                  <h4>{{ testimonial.name }}</h4>
                  <p class="position">{{ testimonial.position }}, {{ testimonial.company }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can bring your vision to life with innovative design solutions.</p>
          <router-link to="/contact" class="btn btn-secondary">Get in Touch</router-link>
        </div>
      </div>
      <div class="cta-overlay"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      featuredProjects: [
        {
          id: 1,
          title: 'Modern Residence',
          type: 'Residential',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 2,
          title: 'Corporate Office',
          type: 'Commercial',
          image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 3,
          title: 'Cultural Center',
          type: 'Public Space',
          image: 'https://images.unsplash.com/photo-1499793983690-29d59a6fd5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ],
      services: [
        {
          title: 'Architectural Design',
          description: 'Innovative and sustainable design solutions tailored to your needs and vision.',
          icon: 'fas fa-drafting-compass'
        },
        {
          title: 'Interior Design',
          description: 'Creating functional and beautiful interior spaces that reflect your style.',
          icon: 'fas fa-couch'
        },
        {
          title: 'Urban Planning',
          description: 'Shaping sustainable and livable communities through thoughtful planning.',
          icon: 'fas fa-city'
        },
        {
          title: 'Renovation',
          description: 'Breathing new life into existing spaces with creative renovation solutions.',
          icon: 'fas fa-hammer'
        }
      ],
      testimonials: [
        {
          quote: 'Working with Berg Architects was a game-changer for our project. Their attention to detail and innovative approach exceeded our expectations.',
          name: 'Sarah Johnson',
          position: 'CEO',
          company: 'Urban Living'
        },
        {
          quote: 'The team delivered exceptional results on time and within budget. Their designs perfectly captured our vision.',
          name: 'Michael Chen',
          position: 'Director',
          company: 'Horizon Developments'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  height: 90vh;
  min-height: 600px;
  background-image: url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

/* Featured Projects */
.featured-projects {
  background-color: var(--light-gray);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.project-card {
  position: relative;
  height: 350px;
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-card:hover::before {
  opacity: 1;
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  color: white;
  transform: translateY(20px);
  transition: transform 0.3s ease;
  z-index: 2;
}

.project-card:hover .project-overlay {
  transform: translateY(0);
}

.project-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: white;
}

.project-overlay p {
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.9);
}

/* About Section */
.about-section {
  padding: 100px 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text h2 {
  margin-bottom: 20px;
}

.about-text p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: #555;
}

.about-image {
  position: relative;
  height: 100%;
  min-height: 400px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
}

/* Services Section */
.services-section {
  background-color: #f9f9f9;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.service-card {
  background: white;
  padding: 40px 30px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background-color: rgba(77, 166, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 32px;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background-color: var(--primary-color);
  color: white;
}

.service-card h3 {
  margin-bottom: 15px;
  color: #333;
  font-size: 1.3rem;
}

.service-card p {
  color: #666;
  line-height: 1.6;
}

/* Testimonials */
.testimonials {
  background-color: #1a1a1a;
  color: white;
  position: relative;
  overflow: hidden;
}

.testimonials::before {
  content: '\201C';
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 300px;
  color: rgba(255, 255, 255, 0.03);
  font-family: Georgia, serif;
  line-height: 1;
  z-index: 1;
}

.testimonials .section-title {
  color: white;
  position: relative;
  z-index: 2;
}

.testimonials .section-title::after {
  background-color: var(--primary-color);
}

.testimonials-slider {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.testimonial {
  text-align: center;
  padding: 0 20px;
}

.quote {
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 30px;
  font-style: italic;
  position: relative;
  color: #eee;
}

.client-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.client-details h4 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: white;
}

.position {
  color: #aaa;
  font-size: 0.9rem;
}

/* CTA Section */
.cta-section {
  position: relative;
  padding: 100px 0;
  text-align: center;
  color: white;
  background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}

.cta-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: white;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 992px) {
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .about-image {
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 80vh;
    min-height: 500px;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .quote {
    font-size: 1.2rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .hero h1 {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-text p {
    font-size: 0.95rem;
  }
}

/* Utility Classes */
.text-center {
  text-align: center;
}

.mt-4 {
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
}

.btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.btn-secondary {
  background-color: var(--secondary-color);
}

.btn-secondary:hover {
  background-color: #e60000;
}

/* Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}
</style>
