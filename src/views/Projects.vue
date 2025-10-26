<template>
  <div class="projects">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Our Projects</h1>
        <p>Explore our portfolio of innovative architectural designs</p>
      </div>
      <div class="overlay"></div>
    </section>

    <!-- Projects Grid -->
    <section class="section projects-grid-section">
      <div class="container">
        <!-- Filter Buttons -->
        <div class="filters">
          <button 
            v-for="(filter, index) in filters" 
            :key="index"
            :class="['filter-btn', { active: activeFilter === filter.value }]"
            @click="filterProjects(filter.value)"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="index"
            class="project-card"
            :style="{ backgroundImage: `url(${project.images[0]})` }"
            @click="openProject(project)"
          >
            <div class="project-overlay">
              <div class="project-info">
                <h3>{{ project.title }}</h3>
                <p>{{ project.type }}</p>
                <span class="view-project">View Project <i class="fas fa-arrow-right"></i></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="load-more" v-if="visibleProjects < projects.length">
          <button class="btn" @click="loadMore">Load More Projects</button>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div class="project-modal" :class="{ 'active': selectedProject }">
      <div class="modal-overlay" @click="closeProject"></div>
      <div class="modal-content" v-if="selectedProject">
        <button class="close-modal" @click="closeProject">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="project-slider">
          <div class="slider-main">
            <img :src="selectedProject.images[currentImageIndex]" :alt="selectedProject.title" />
            <button class="slider-nav prev" @click.stop="prevImage">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="slider-nav next" @click.stop="nextImage">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
          <div class="slider-thumbnails">
            <div 
              v-for="(image, index) in selectedProject.images" 
              :key="index"
              class="thumbnail"
              :class="{ 'active': currentImageIndex === index }"
              :style="{ backgroundImage: `url(${image})` }"
              @click="goToImage(index)"
            ></div>
          </div>
        </div>
        
        <div class="project-details">
          <h2>{{ selectedProject.title }}</h2>
          <div class="project-meta">
            <div class="meta-item">
              <span class="meta-label">Client:</span>
              <span class="meta-value">{{ selectedProject.client }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Location:</span>
              <span class="meta-value">{{ selectedProject.location }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Year:</span>
              <span class="meta-value">{{ selectedProject.year }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Area:</span>
              <span class="meta-value">{{ selectedProject.area }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Category:</span>
              <span class="meta-value">{{ selectedProject.type }}</span>
            </div>
          </div>
          
          <div class="project-description">
            <h3>Project Overview</h3>
            <p v-html="selectedProject.description"></p>
          </div>
          
          <div class="project-features">
            <h3>Key Features</h3>
            <ul>
              <li v-for="(feature, index) in selectedProject.features" :key="index">
                <i class="fas fa-check"></i> {{ feature }}
              </li>
            </ul>
          </div>
          
          <div class="project-cta">
            <a :href="selectedProject.website" target="_blank" class="btn" v-if="selectedProject.website">
              <i class="fas fa-globe"></i> Visit Website
            </a>
            <router-link to="/contact" class="btn btn-secondary">
              <i class="fas fa-paper-plane"></i> Start Your Project
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      activeFilter: 'all',
      visibleProjects: 6,
      selectedProject: null,
      currentImageIndex: 0,
      filters: [
        { label: 'All Projects', value: 'all' },
        { label: 'Residential', value: 'residential' },
        { label: 'Commercial', value: 'commercial' },
        { label: 'Public', value: 'public' },
        { label: 'Interior', value: 'interior' }
      ],
      projects: [
        {
          id: 1,
          title: 'Modern Urban Residence',
          type: 'Residential',
          client: 'Private Client',
          location: 'New York, USA',
          year: '2023',
          area: '3,500 sq.ft',
          description: 'A stunning modern residence designed for contemporary urban living. This project features clean lines, expansive glass facades, and sustainable materials that blend seamlessly with the surrounding cityscape. The open floor plan maximizes natural light and creates a sense of spaciousness.',
          features: [
            'Open floor plan with floor-to-ceiling windows',
            'Rooftop garden with panoramic city views',
            'Energy-efficient design with solar panels',
            'Smart home automation system',
            'Custom-designed interior finishes'
          ],
          images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          ],
          website: 'https://example.com/urban-residence'
        },
        {
          id: 2,
          title: 'Corporate Headquarters',
          type: 'Commercial',
          client: 'TechForward Inc.',
          location: 'San Francisco, USA',
          year: '2023',
          area: '25,000 sq.ft',
          description: 'A state-of-the-art corporate headquarters designed to foster innovation and collaboration. The building features flexible workspaces, breakout areas, and sustainable design elements that reflect the company\'s commitment to environmental responsibility.',
          features: [
            'LEED Platinum certified',
            'Open office concept with flexible workstations',
            'Indoor green spaces and living walls',
            'Advanced HVAC system for optimal air quality',
            'On-site fitness center and cafeteria'
          ],
          images: [
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          ],
          website: 'https://techforward.com'
        },
        {
          id: 3,
          title: 'Mountain Retreat',
          type: 'Residential',
          client: 'Private Client',
          location: 'Aspen, USA',
          year: '2022',
          area: '4,200 sq.ft',
          description: 'A luxurious mountain retreat that harmonizes with its natural surroundings. The design incorporates local stone, reclaimed wood, and large windows that frame breathtaking mountain views. The home features a modern yet rustic aesthetic that creates a warm and inviting atmosphere.',
          features: [
            'Panoramic mountain views from every room',
            'Outdoor living spaces with a fireplace and hot tub',
            'Energy-efficient geothermal heating system',
            'Custom woodwork and stone details',
            'Garage with space for ski and outdoor equipment'
          ],
          images: [
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          ]
        },
        {
          id: 4,
          title: 'Community Arts Center',
          type: 'Public',
          client: 'City of Portland',
          location: 'Portland, USA',
          year: '2022',
          area: '15,000 sq.ft',
          description: 'A vibrant community arts center designed to inspire creativity and bring people together. The facility includes exhibition spaces, studios, and a performance venue, all designed to be flexible and accessible to the entire community.',
          features: [
            'Main gallery with movable walls',
            'Ceramics and painting studios',
            '200-seat black box theater',
            'Community meeting rooms',
            'Outdoor sculpture garden'
          ],
          images: [
            'https://images.unsplash.com/photo-1499793983690-29d59a6fd5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1499793983690-29d59a6fd5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1499793983690-29d59a6fd5a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          ]
        },
        {
          id: 5,
          title: 'Luxury Hotel & Spa',
          type: 'Commercial',
          client: 'Horizon Hospitality',
          location: 'Miami, USA',
          year: '2023',
          area: '85,000 sq.ft',
          description: 'A luxurious beachfront hotel and spa that offers guests an unparalleled experience of relaxation and sophistication. The design blends contemporary elegance with tropical influences, creating a serene oasis in the heart of Miami.',
          features: [
            '150 guest rooms with ocean views',
            'Full-service spa and wellness center',
            'Rooftop infinity pool and bar',
            'Fine dining restaurant with locally-sourced ingredients',
            '10,000 sq.ft of event space'
          ],
          images: [
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          ],
          website: 'https://miamiluxuryhotel.com'
        },
        {
          id: 6,
          title: 'Urban Loft Renovation',
          type: 'Interior',
          client: 'Private Client',
          location: 'Chicago, USA',
          year: '2022',
          area: '2,800 sq.ft',
          description: 'A complete transformation of a historic loft in downtown Chicago. The design preserves the building\'s industrial character while introducing modern elements and an open, airy layout. The result is a sophisticated urban residence that feels both spacious and intimate.',
          features: [
            'Open-concept living space with exposed brick and beams',
            'Custom-designed kitchen with high-end appliances',
            'Master suite with walk-in closet and spa bathroom',
            'Home office with built-in storage',
            'Smart home technology integration'
          ],
          images: [
            'https://images.unsplash.com/photo 1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          ]
        },
        {
          id: 7,
          title: 'Eco-Friendly Office Building',
          type: 'Commercial',
          client: 'Green Future Corp',
          location: 'Seattle, USA',
          year: '2023',
          area: '35,000 sq.ft',
          description: 'A sustainable office building that sets a new standard for environmentally responsible design. The building generates its own renewable energy, collects and recycles rainwater, and features a living green roof that helps regulate temperature and reduce the urban heat island effect.',
          features: [
            'Net-zero energy building',
            'Rainwater harvesting system',
            'Green roof with native plants',
            'Bicycle storage and electric vehicle charging stations',
            'Daylight harvesting system'
          ],
          images: [
            'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          ],
          website: 'https://greenfuture.com'
        },
        {
          id: 8,
          title: 'Lakeside Cabin',
          type: 'Residential',
          client: 'Private Client',
          location: 'Lake Tahoe, USA',
          year: '2021',
          area: '1,800 sq.ft',
          description: 'A cozy yet modern cabin nestled on the shores of Lake Tahoe. The design emphasizes a strong connection to the outdoors, with large windows, covered decks, and natural materials that complement the surrounding landscape.',
          features: [
            'Direct lake access with private dock',
            'Floor-to-ceiling windows with lake views',
            'Wood-burning fireplace with stone chimney',
            'Outdoor shower and hot tub',
            'Energy-efficient design for year-round use'
          ],
          images: [
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          ]
        },
        {
          id: 9,
          title: 'Boutique Retail Space',
          type: 'Commercial',
          client: 'Avenue 32',
          location: 'Los Angeles, USA',
          year: '2023',
          area: '5,000 sq.ft',
          description: 'A sophisticated retail space designed to showcase high-end fashion in an intimate setting. The interior features custom display units, flexible lighting, and luxurious materials that create an elevated shopping experience.',
          features: [
            'Custom-designed display fixtures',
            'Dimmable LED lighting system',
            'VIP fitting rooms with lounge area',
            'Movable walls for flexible space planning',
            'Sustainable materials and finishes'
          ],
          images: [
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          ],
          website: 'https://avenue32.com'
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'all') {
        return this.projects.slice(0, this.visibleProjects);
      } else {
        return this.projects
          .filter(project => project.type.toLowerCase() === this.activeFilter)
          .slice(0, this.visibleProjects);
      }
    }
  },
  methods: {
    filterProjects(filter) {
      this.activeFilter = filter;
      this.visibleProjects = 6; // Reset visible projects when changing filters
    },
    loadMore() {
      this.visibleProjects += 3;
    },
    openProject(project) {
      this.selectedProject = project;
      this.currentImageIndex = 0;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    },
    closeProject() {
      this.selectedProject = null;
      document.body.style.overflow = ''; // Re-enable scrolling
    },
    nextImage() {
      if (this.selectedProject) {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedProject.images.length;
      }
    },
    prevImage() {
      if (this.selectedProject) {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedProject.images.length) % this.selectedProject.images.length;
      }
    },
    goToImage(index) {
      this.currentImageIndex = index;
    },
    handleKeydown(e) {
      if (this.selectedProject) {
        if (e.key === 'Escape') {
          this.closeProject();
        } else if (e.key === 'ArrowRight') {
          this.nextImage();
        } else if (e.key === 'ArrowLeft') {
          this.prevImage();
        }
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
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

/* Filters */
.filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
}

.filter-btn {
  padding: 8px 20px;
  background: none;
  border: 1px solid #ddd;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.filter-btn.active {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.project-card {
  position: relative;
  height: 350px;
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  display: flex;
  align-items: flex-end;
  padding: 30px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-info {
  transform: translateY(20px);
  transition: transform 0.3s ease;
  color: white;
  width: 100%;
}

.project-card:hover .project-info {
  transform: translateY(0);
}

.project-info h3 {
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: white;
}

.project-info p {
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.9);
}

.view-project {
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.project-card:hover .view-project {
  opacity: 1;
  transform: translateX(0);
}

.view-project i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.project-card:hover .view-project i {
  transform: translateX(5px);
}

/* Load More Button */
.load-more {
  text-align: center;
  margin: 40px 0;
}

.load-more .btn {
  background: none;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 12px 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.load-more .btn:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Project Modal */
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  overflow-y: auto;
  padding: 50px 0;
}

.project-modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  cursor: pointer;
}

.modal-content {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  z-index: 2;
  transform: translateY(50px);
  transition: transform 0.4s ease;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
}

.project-modal.active .modal-content {
  transform: translateY(0);
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-modal:hover {
  background-color: var(--primary-color);
  color: white;
  transform: rotate(90deg);
}

/* Project Slider */
.project-slider {
  position: relative;
  width: 100%;
  background-color: #f9f9f9;
}

.slider-main {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.slider-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.slider-nav:hover {
  background-color: var(--primary-color);
  color: white;
}

.slider-nav.prev {
  left: 20px;
}

.slider-nav.next {
  right: 20px;
}

.slider-thumbnails {
  display: flex;
  padding: 15px;
  overflow-x: auto;
  gap: 10px;
  background-color: #f5f5f5;
}

.thumbnail {
  flex: 0 0 80px;
  height: 60px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
  background-size: cover;
  background-position: center;
  border: 2px solid transparent;
}

.thumbnail:hover {
  opacity: 1;
}

.thumbnail.active {
  opacity: 1;
  border-color: var(--primary-color);
}

/* Project Details */
.project-details {
  padding: 40px;
}

.project-details h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #333;
}

.project-meta {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
}

.meta-item {
  display: flex;
  flex-direction: column;
}

.meta-label {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 5px;
}

.meta-value {
  font-weight: 500;
  color: #333;
}

.project-description {
  margin-bottom: 30px;
}

.project-description h3,
.project-features h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
  position: relative;
  padding-bottom: 10px;
}

.project-description h3::after,
.project-features h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
}

.project-description p {
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
}

.project-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.project-features li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  color: #555;
  line-height: 1.6;
}

.project-features i {
  color: var(--primary-color);
  margin-right: 10px;
  margin-top: 3px;
  font-size: 0.8rem;
}

.project-cta {
  display: flex;
  gap: 15px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.project-cta .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 25px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.project-cta .btn i {
  margin-right: 8px;
  font-size: 0.9rem;
}

.project-cta .btn-secondary {
  background-color: var(--secondary-color);
}

.project-cta .btn-secondary:hover {
  background-color: #e60000;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .modal-content {
    max-width: 95%;
  }
  
  .slider-main {
    height: 400px;
  }
}

@media (max-width: 992px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  .project-details {
    padding: 30px;
  }
  
  .project-meta {
    grid-template-columns: repeat(2, 1fr);
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
  
  .filters {
    gap: 8px;
  }
  
  .filter-btn {
    padding: 6px 15px;
    font-size: 0.8rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .slider-main {
    height: 300px;
  }
  
  .project-details h2 {
    font-size: 1.8rem;
  }
  
  .project-meta {
    grid-template-columns: 1fr;
  }
  
  .project-cta {
    flex-direction: column;
  }
  
  .project-cta .btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .page-header h1 {
    font-size: 1.8rem;
  }
  
  .project-details {
    padding: 20px;
  }
  
  .project-details h2 {
    font-size: 1.5rem;
  }
  
  .project-description h3,
  .project-features h3 {
    font-size: 1.3rem;
  }
  
  .slider-nav {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
  
  .thumbnail {
    flex: 0 0 60px;
    height: 50px;
  }
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.5s ease forwards;
}

.slide-up {
  animation: slideUp 0.5s ease forwards;
}
</style>
