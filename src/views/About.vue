<template>
  <div class="about">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>About Berg Architects</h1>
        <p>Designing spaces that inspire and endure</p>
      </div>
      <div class="overlay"></div>
    </section>

    <!-- Our Story -->
    <section class="section our-story">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Story</h2>
          <p class="section-subtitle">Crafting architectural excellence since 2005</p>
        </div>
        <div class="story-content">
          <div class="story-text">
            <p>Founded in 2005, Berg Architects has grown from a small design studio into a renowned architectural firm with a portfolio spanning residential, commercial, and public projects. Our journey began with a shared vision: to create spaces that not only meet functional requirements but also inspire and uplift the human spirit.</p>
            <p>Over the years, we've had the privilege of working with diverse clients, from homeowners to large corporations, each with unique needs and aspirations. Our commitment to excellence, attention to detail, and passion for innovation have been the cornerstones of our success.</p>
            <p>Today, with a team of talented architects, designers, and planners, we continue to push the boundaries of architectural design while maintaining our core values of sustainability, functionality, and aesthetic excellence.</p>
          </div>
          <div class="story-image">
            <div class="image-container"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="section values-section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Our Values</h2>
          <p class="section-subtitle">Guiding principles that shape our work</p>
        </div>
        <div class="values-grid">
          <div class="value-card" v-for="(value, index) in values" :key="index">
            <div class="value-icon">
              <i :class="value.icon"></i>
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section class="section team-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Meet Our Team</h2>
          <p class="section-subtitle">The creative minds behind our success</p>
        </div>
        <div class="team-grid">
          <div class="team-member" v-for="(member, index) in teamMembers" :key="index">
            <div class="member-image">
              <div class="image-placeholder"></div>
              <div class="social-links">
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" aria-label="Email"><i class="fas fa-envelope"></i></a>
              </div>
            </div>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="position">{{ member.position }}</p>
              <p class="bio">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section testimonials">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Client Testimonials</h2>
          <p class="section-subtitle">What our clients say about us</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="quote-icon">
              <i class="fas fa-quote-left"></i>
            </div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="client-info">
              <div class="client-name">{{ testimonial.name }}</div>
              <div class="client-position">{{ testimonial.position }}, {{ testimonial.company }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
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
  name: 'About',
  data() {
    return {
      values: [
        {
          title: 'Innovation',
          description: 'We embrace creativity and forward-thinking to deliver cutting-edge design solutions.',
          icon: 'fas fa-lightbulb'
        },
        {
          title: 'Sustainability',
          description: 'Committed to environmentally responsible design that minimizes our ecological footprint.',
          icon: 'fas fa-leaf'
        },
        {
          title: 'Excellence',
          description: 'Pursuing the highest standards in every project, from concept to completion.',
          icon: 'fas fa-award'
        },
        {
          title: 'Collaboration',
          description: 'Working closely with clients and partners to achieve exceptional results together.',
          icon: 'fas fa-handshake'
        },
        {
          title: 'Integrity',
          description: 'Maintaining honesty, transparency, and ethical practices in all our dealings.',
          icon: 'fas fa-shield-alt'
        },
        {
          title: 'Client Focus',
          description: 'Putting our clients\' needs and vision at the heart of every project.',
          icon: 'fas fa-user-tie'
        }
      ],
      teamMembers: [
        {
          name: 'Sarah Berg',
          position: 'Founder & Principal Architect',
          bio: 'With over 20 years of experience in architectural design, Sarah leads our team with vision and expertise.',
          image: ''
        },
        {
          name: 'Michael Chen',
          position: 'Senior Architect',
          bio: 'Specializing in sustainable design, Michael brings innovative solutions to complex architectural challenges.',
          image: ''
        },
        {
          name: 'Emily Rodriguez',
          position: 'Interior Design Director',
          bio: 'Emily\'s keen eye for detail and passion for creating functional spaces elevates every project.',
          image: ''
        },
        {
          name: 'David Kim',
          position: 'Project Manager',
          bio: 'David ensures that every project runs smoothly, on time, and within budget.',
          image: ''
        }
      ],
      testimonials: [
        {
          text: 'Berg Architects transformed our outdated office into a modern, functional workspace that our team loves. Their attention to detail and innovative approach exceeded our expectations.',
          name: 'Jennifer Lee',
          position: 'CEO',
          company: 'TechForward Inc.'
        },
        {
          text: 'Working with the Berg team was an absolute pleasure. They listened to our needs and delivered a home that perfectly balances form and function.',
          name: 'Robert Johnson',
          position: 'Homeowner',
          company: ''
        },
        {
          text: 'The cultural center they designed has become a landmark in our community. Berg Architects understood our vision and brought it to life beautifully.',
          name: 'Maria Garcia',
          position: 'Director',
          company: 'Community Arts Council'
        }
      ]
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

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #333;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background-color: var(--primary-color);
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0;
}

/* Our Story */
.our-story {
  padding: 100px 0;
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.story-text p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: #555;
  font-size: 1.1rem;
}

.story-image {
  position: relative;
  height: 100%;
  min-height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo 1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
}

/* Values Section */
.values-section {
  background-color: #f9f9f9;
  padding: 100px 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.value-card {
  background: white;
  padding: 40px 30px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.value-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background-color: rgba(77, 166, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 30px;
  transition: all 0.3s ease;
}

.value-card:hover .value-icon {
  background-color: var(--primary-color);
  color: white;
  transform: rotateY(180deg);
}

.value-card h3 {
  margin-bottom: 15px;
  color: #333;
  font-size: 1.3rem;
}

.value-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 0;
}

/* Team Section */
.team-section {
  padding: 100px 0;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.team-member {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.member-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.team-member:hover .image-placeholder {
  transform: scale(1.05);
}

.social-links {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.team-member:hover .social-links {
  transform: translateY(0);
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: var(--secondary-color);
  transform: translateY(-3px);
}

.member-info {
  padding: 25px;
  text-align: center;
}

.member-info h3 {
  margin-bottom: 5px;
  color: #333;
  font-size: 1.3rem;
}

.member-info .position {
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.member-info .bio {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 0;
}

/* Testimonials */
.testimonials {
  background-color: #1a1a1a;
  color: white;
  padding: 100px 0;
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

.testimonials .section-subtitle {
  color: #aaa;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 2;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.quote-icon {
  font-size: 40px;
  color: var(--primary-color);
  opacity: 0.2;
  margin-bottom: 20px;
}

.testimonial-text {
  font-style: italic;
  margin-bottom: 20px;
  line-height: 1.8;
  color: #eee;
}

.client-info {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.client-name {
  font-weight: 600;
  color: white;
  margin-bottom: 5px;
}

.client-position {
  font-size: 0.9rem;
  color: #aaa;
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
  .story-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .story-image {
    min-height: 300px;
    order: -1;
  }
  
  .page-header h1 {
    font-size: 2.8rem;
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
  
  .section-title {
    font-size: 2rem;
  }
  
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 576px) {
  .page-header h1 {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
}

/* Utility Classes */
.text-center {
  text-align: center;
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
</style>
