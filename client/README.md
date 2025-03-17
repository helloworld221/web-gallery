# Media Upload Frontend

A React application with TypeScript and Vite for uploading and viewing media files with Google authentication.

## Features

- **User Authentication**: Google OAuth login/signup
- **Media Upload**: Upload images and videos from local devices
- **Media Gallery**: View uploaded media in an organized gallery
- **Responsive Design**: Works on desktop and mobile devices

## Prerequisites

- Node.js (v18+)
- yarn

## Installation

1. Install dependencies:

```bash
yarn install
```

2. Create a `.env` file in the client directory:

```bash
cp .env.example .env
```

3. Edit the `.env` file with your credentials:

```
VITE_API_URL=http://localhost:5000/api
```

## Development

Start the development server:

```bash
yarn dev
```

This will start the Vite development server at `http://localhost:3000`.

## Build

Build the application for production:

```bash
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
client/
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, fonts, etc.
│   ├── components/   # React components
│   │   ├── Auth/     # Authentication components
│   │   ├── Layout/   # Layout components
│   │   └── Media/    # Media-related components
│   ├── contexts/     # React contexts
│   ├── hooks/        # Custom React hooks
│   ├── services/     # API services
│   ├── types/        # TypeScript type definitions
│   ├── App.tsx       # Main application component
│   └── index.tsx     # Application entry point
├── .env.example      # Example environment variables
├── index.html        # HTML template
├── package.json      # Package configuration
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## Key Components

### Layout

- `Navbar`: Navbar component with toggle and user dropdown

### Authentication

- `Login`: Basic login component

### Common

- `ErrorBoundary`: Route component for displaying error
- `ProtectedRoute`: Route component for authenticated routes

### Media

- `UploadForm.tsx`: Component for uploading media files with validation
- `MediaGrid.tsx`: Component for organizing and displaying uploaded media in a responsive grid layout
- `MediaItem.tsx`: Component for displaying individual media items with preview functionality
- `MediaModal.tsx`: Modal component for viewing media
- `DeleteConfirmation.tsx`: Confirmation dialog for media deletion to prevent accidental removal
- `MediaPropertiesPopup.tsx`: Popup component for viewing media metadata properties

## Technologies Used

- **React**: UI library
- **TypeScript**: Static typing
- **Vite**: Build tool and development server
- **React Router**: Client-side routing
- **Axios**: HTTP client
