# Media Upload Backend

A Express backend with TypeScript for a media upload application with Google authentication.

## Features

- **User Authentication**: Google OAuth integration
- **Media Upload**: Support for image and video uploads to AWS S3
- **RESTful API**: Well-structured API design
- **Swagger Documentation**: API documentation with Swagger

## Prerequisites

- Node.js (v18+)
- MongoDB
- AWS S3 account
- Google Developer account for OAuth

## Installation

1. Install dependencies:

```bash
yarn install
```

2. Create a `.env` file in the server directory:

```bash
cp .env.example .env
```

3. Edit the `.env` file with your credentials:

```
# Server
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000

# MongoDB
MONGODB_URI=mongodb://localhost:27017/media-upload

# Session
SESSION_SECRET=your_jwt_secret_key_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

# Storage (AWS S3)
AWS_BUCKET_NAME=your_bucket_name
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_REGION=your_region

#VERCEL
VERCEL=false
```

## Development

Start the development server:

```bash
yarn dev
```

This will start the server with hot reloading at `http://localhost:3000`.

## Build

Build the application for production:

```bash
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Production

Start the production server:

```bash
yarn start
```

## API Documentation

Once the server is running, you can access the Swagger documentation at:

```
http://localhost:5000/api-docs
```

## API Endpoints

### Authentication

- `GET /api/auth/google` - Initiate Google OAuth authentication
- `GET /api/auth/google/callback` - Google OAuth callback
- `GET /api/auth/current-user` - Get current user information
- `GET /api/auth/logout` - Logout user

### Media

- `POST /api/media/upload` - Upload a media file
- `GET /api/media` - Get all media files for the authenticated user
- `POST /api/media/:id/delete` - Delete a specific media file

## Project Structure

```
server/
├── src/
│   ├── config/       # Configuration files
│   ├── controllers/  # Request handlers
│   ├── middleware/   # Express middlewares
│   ├── models/       # Mongoose models
│   ├── routes/       # Express routes
│   ├── services/     # Business logic
│   ├── utils/        # Utility functions
│   ├── validations/  # Input validation schemas
│   └── index.ts      # Server entry point
├── types/
│   └── express/      # Express type extensions
├── .env.example      # Example environment variables
├── package.json      # Package configuration
└── tsconfig.json     # TypeScript configuration
```

## Security Features

This backend implements several security best practices:

- **Authentication**: JWT-based authentication with Google OAuth
- **Input Validation**: Validates all inputs using express-validator, joi
- **Rate Limiting**: Prevents abuse through rate limiting
- **CORS**: Configured Cross-Origin Resource Sharing
- **Security Headers**: Using Helmet middleware
- **Error Handling**: Comprehensive error handling middleware
- **File Upload**: Validates file uploads

## Monitoring and Logging

- **Winston**: Application logging
- **Error Tracking**: Captures and logs errors
