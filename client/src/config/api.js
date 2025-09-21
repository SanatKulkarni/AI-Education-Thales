// API Configuration
const API_CONFIG = {
  // Using production URL as primary
  BASE_URL: 'https://ai-education-thales.onrender.com',
  
  // Alternative configurations (commented out):
  // For automatic environment switching:
  // BASE_URL: process.env.NODE_ENV === 'production' 
  //   ? 'https://ai-education-thales.onrender.com' 
  //   : 'http://localhost:5000',
  
  // For localhost development:
  // BASE_URL: 'http://localhost:5000',
};

export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: `${API_CONFIG.BASE_URL}/api/auth/login`,
  REGISTER: `${API_CONFIG.BASE_URL}/api/auth/register`,
  
  // Course endpoints
  COURSES: `${API_CONFIG.BASE_URL}/api/courses`,
  GENERATE_COURSE: `${API_CONFIG.BASE_URL}/api/courses/generate`,
  SAVE_COURSE: `${API_CONFIG.BASE_URL}/api/courses/save`,
  
  // Helper function to get course-specific endpoints
  getCourseById: (courseId) => `${API_CONFIG.BASE_URL}/api/courses/${courseId}`,
  generateCourseContent: (courseId) => `${API_CONFIG.BASE_URL}/api/courses/${courseId}/generate-content`,
};

export default API_CONFIG;