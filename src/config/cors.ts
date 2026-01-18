import { CorsOptions } from "cors";

// Define all the allowed urls:
const ALLOWED_ORIGINS = new Set<string>([
  "https://yourdomain.com",
  "https://www.yourdomain.com",
  "http://localhost:3000", 
]);

const corsConfig: CorsOptions = {
  origin: (origin, callback) => {

    // Allow non-browser tools (Postman, curl, server-to-server)
    if (!origin) return callback(null, true);

    if (ALLOWED_ORIGINS.has(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Authorization"],
  credentials: true, // if using cookies / sessions / auth tokens
  maxAge: 86400, // cache preflight response for 24h
};

export default corsConfig;
