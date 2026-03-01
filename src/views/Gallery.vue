<template>
  <div class="Gallery">

    <section class="gallery-section">
      <div class="gallery-container">
        <div class="gallery-grid">
          <div class="gallery-item" v-for="(image,index) in galleryImages"
            @click="openPopup(index)">
            <img :src="image.src" :alt="image.alt">
            <div class="image-overlay">
              <h3>{{ image.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div v-if="showPopup" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <button class="popup-nav popup-prev" @click.stop="prevImage" v-if="currentImageIndex > 0"><</button>
        <button class="popup-nav popup-next" @click.stop="nextImage" v-if="currentImageIndex < galleryImages.length - 1">></button>
        <button class="popup-close" @click="closePopup">X</button>
        <img :src="galleryImages[currentImageIndex].src" :alt="galleryImages[currentImageIndex].alt">
        <div class="popup-info">
          <h3>{{ galleryImages[currentImageIndex].title}}</h3>
          <p>{{ galleryImages[currentImageIndex].description }}</p>
        </div>
      </div>
    </div> 

  </div>
</template>

<script>
import building1 from '@/assets/images/building1.jpeg';
import building2 from '@/assets/images/building2.jpeg';
import building3 from '@/assets/images/building3.jpeg';
import building4 from '@/assets/images/building4.jpeg';
import building5 from '@/assets/images/building5.jpeg';
import building6 from '@/assets/images/building6.jpeg';
import building7 from '@/assets/images/building7.jpeg';
import building8 from '@/assets/images/building8.jpeg';
import building9 from '@/assets/images/building9.jpeg';
import building10 from '@/assets/images/building10.jpeg';
import building11 from '@/assets/images/building11.jpeg';
import building12 from '@/assets/images/building12.jpeg';
import building13 from '@/assets/images/building13.jpeg';
import building14 from '@/assets/images/building14.jpeg';
import building15 from '@/assets/images/building15.jpeg';
import building16 from '@/assets/images/building16.jpeg';
import building17 from '@/assets/images/bulding17.jpeg';
import building18 from '@/assets/images/building18.jpeg';
import building19 from '@/assets/images/building19.jpeg';
import building20 from '@/assets/images/building20.jpeg';

export default {
  name: 'Gallery',
  data() {
    return{
      showPopup: false,
      currentImageIndex : 0,
      galleryImages: [
        {
          src: building1,
          alt: 'Building 1',
          title: 'Building 1',
          description: 'Building 1'
        },
        {
          src: building2,
          alt: 'Building 2',
          title: 'Building 2',
          description: 'Building 2'
        },
        {
          src: building3,
          alt: 'Building 3',
          title: 'Building 3',
          description: 'Building 3'
        },
        {
          src: building4,
          alt: 'Building 4',
          title: 'Building 4',
          description: 'Building 4'
        },
        {
          src: building5,
          alt: 'Building 5',
          title: 'Building 5',
          description: 'Building 5'
        },
        {
          src: building6,
          alt: 'Building 6',
          title: 'Building 6',
          description: 'Building 6'
        },
        {
          src: building7,
          alt: 'Building 7',
          title: 'Building 7',
          description: 'Building 7'
        },
        {
          src: building8,
          alt: 'Building 8',
          title: 'Building 8',
          description: 'Building 8'
        },
        /*
        {
          src: building9,
          alt: 'Building 9',
          title: 'Building 9',
          description: 'Building 9'
        },*/

        {
          src: building10,
          alt: 'Building 9',
          title: 'Building 9',
          description: 'Building 9'
        },
        {
          src: building11,
          alt: 'Building 10',
          title: 'Building 10',
          description: 'Building 10'
        },
        /*
        {
          src: building12,
          alt: 'Building 12',
          title: 'Building 12',
          description: 'Building 12'
        },
        {
          src: building13,
          alt: 'Building 13',
          title: 'Building 13',
          description: 'Building 13'
        },*/
        {
          src: building14,
          alt: 'Building 11',
          title: 'Building 11',
          description: 'Building 11'
        },
        {
          src: building15,
          alt: 'Building 12',
          title: 'Building 12',
          description: 'Building 12'
        },
        {
          src: building16,
          alt: 'Building 13',
          title: 'Building 13',
          description: 'Building 13'
        },
        {
          src: building17,
          alt: 'Building 14',
          title: 'Building 14',
          description: 'Building 14'
        },
        {
          src: building18,
          alt: 'Building 15',
          title: 'Building 15',
          description: 'Building 15'
        },
        {
          src: building19,
          alt: 'Building 16',
          title: 'Building 16',
          description: 'Building 16'
        },
        {
          src: building20,
          alt: 'Building 17',
          title: 'Building 17',
          description: 'Building 17'
        }
      ]
    }
  },
  methods: {
    openPopup(index) {
      this.currentImageIndex = index;
      this.showPopup = true;
      document.body.style.overflow = "hidden";
    },
    closePopup() {
      this.showPopup = false;
      document.body.style.overflow = 'auto'
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    },
    nextImage() {
      if (this.currentImageIndex < this.galleryImages.length - 1) {
        this.currentImageIndex++;
      }
    }
  }
}
</script>

<style scoped>
.gallery-section {
  padding: 80px 0;
}
 
.gallery-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}
 
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 0 auto; /* This centers the grid itself */
  max-width: 1200px; /* Optional: constrain max width for better centering */
}
 
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  aspect-ratio: 16/9;
  transition: transform 0.3s ease;
}
 
.gallery-item:hover {
  transform: translateY(-5px);
}
 
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  filter: grayscale(100%) contrast(1.1) brightness(0.95);
  transition: filter 0.3s ease;

}
 
.gallery-item:hover img {
  transform: scale(1.05);
  filter: grayscale(0%) contrast(1.2) brightness(1.05);
}
 
.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
 
.gallery-item:hover .image-overlay {
  transform: translateY(0);
}
 
.image-overlay h3 {
  margin: 0 0 5px 0;
  font-size: 1.2rem;
}
 
.image-overlay p {
  margin: 0;
  opacity: 0.9;
  font-size: 0.9rem;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}
 
.popup-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  animation: slideIn 0.3s ease;
}
 
.popup-content img {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
  filter: none !important; /* Remove grayscale filter in popup */
}
 
.popup-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}
 
.popup-close:hover {
  transform: scale(1.1);
}
 
.popup-info {
  text-align: center;
  color: white;
  margin-top: 20px;
}
 
.popup-info h3 {
  margin: 0;
  font-size: 1.5rem;
}
 
/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
 
@keyframes slideIn {
  from { 
    opacity: 0;
    transform: scale(0.8);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}
 
/* Responsive */
@media (max-width: 768px) {
  .popup-content {
    max-width: 95%;
  }
  
  .popup-close {
    top: -35px;
    font-size: 2rem;
  }
}

.popup-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.2rem;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  letter-spacing: 2px;
}
 
.popup-nav:hover {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
 
.popup-nav:active {
  transform: translateY(-50%) scale(0.95);
}
 
.popup-prev {
  left: -70px;
}
 
.popup-next {
  right: -70px;
}
 
/* Mobile responsive positioning */
@media (max-width: 768px) {
  .popup-nav {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .popup-prev {
    left: 10px;
  }
  
  .popup-next {
    right: 10px;
  }
}
 
@media (max-width: 480px) {
  .popup-nav {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
}

</style>
