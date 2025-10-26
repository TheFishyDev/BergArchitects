<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <div class="logo">
          <router-link to="/">
            <img :src="logoPath" alt="Berg Architects" class="logo-img" />
          </router-link>
        </div>
        
        <div class="nav-links" :class="{ 'active': isMenuOpen }">
          <router-link to="/" @click="closeMenu">Home</router-link>
          <router-link to="/about" @click="closeMenu">About Us</router-link>
          <router-link to="/projects" @click="closeMenu">Projects</router-link>
          <router-link to="/contact" @click="closeMenu">Contact</router-link>
        </div>
        
        <div class="menu-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false,
      logoPath: '/images/BergArchitect.jpg'
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 15px 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  height: 60px;
}

.logo-img {
  height: 100%;
  width: auto;
  object-fit: contain;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: var(--text-color);
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
  position: relative;
  padding: 5px 0;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: var(--transition);
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: var(--primary-color);
}

.nav-links a:hover::after,
.nav-links a.router-link-exact-active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1001;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
  transition: var(--transition);
}

/* Responsive Design */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: var(--white);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    transition: var(--transition);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
  
  .nav-links.active {
    right: 0;
  }
  
  .nav-links a {
    font-size: 1.2rem;
  }
  
  .menu-toggle.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  
  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
}
</style>
