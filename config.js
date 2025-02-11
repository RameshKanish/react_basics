// config.js

let API_BASE_URL;

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
    // Use the localhost URL for development
    API_BASE_URL = "http://localhost:8080";
} else {
    // Use the production URL
    API_BASE_URL = "https://bookmyshow-backend-latest.onrender.com";
}

export { API_BASE_URL };