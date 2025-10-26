import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import the main CSS file
import './assets/main.css';

const app = createApp(App);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');

// Add a global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error:', err);
  console.error('Error in component:', vm);
  console.error('Error info:', info);
  
  // You could add error tracking here (e.g., Sentry, LogRocket, etc.)
  // trackError(err, vm, info);
};

// Global properties can be added here if needed
// app.config.globalProperties.$someGlobalProperty = 'value';

// Register global components here if needed
// app.component('ComponentName', Component);
