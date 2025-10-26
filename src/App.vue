<script>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<template>
  <div class="app">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
@import './assets/main.css';

:root {
  --primary-color: #4da6ff;
  --primary-dark: #0077e6;
  --secondary-color: #ff4d4d;
  --text-color: #333;
  --light-gray: #f8f9fa;
  --white: #ffffff;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  color: var(--text-color);
  line-height: 1.6;
  background-color: var(--white);
  overflow-x: hidden;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 80px; /* Account for fixed header */
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 80px 0;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background-color: var(--primary-color);
}

.text-center {
  text-align: center;
}

.text-center .section-title::after {
  left: 50%;
  transform: translateX(-50%);
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
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
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

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 100%;
    padding: 0 30px;
  }
}

@media (max-width: 992px) {
  .section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .btn {
    padding: 10px 25px;
    font-size: 0.85rem;
  }
}

@media (max-width: 576px) {
  .section {
    padding: 40px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .main-content {
    padding-top: 70px; /* Adjust for smaller header on mobile */
  }
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.6s ease forwards;
}

.slide-in-up {
  animation: slideInUp 0.6s ease forwards;
}
</style>
