# Media Upload Application

A full-stack TypeScript application using React (Vite) + Express with Turborepo for monorepo management.

## Features

- **Monorepo Management**: Using Turborepo for efficient dependency management and build processes
- **Frontend**: React with TypeScript and Vite
- **Backend**: Express with TypeScript
- **Authentication**: Google OAuth integration
- **Media Upload**: Support for image and video uploads to AWS S3

## Prerequisites

- Node.js (v18+)
- yarn
- MongoDB
- AWS S3 account
- Google Developer account for OAuth

## Project Structure

```
├── .husky              # Git hooks
├── client              # React frontend
├── server              # Express backend
├── turbo.json          # Turborepo configuration
└── package.json        # Root package.json
```

## Setup

1. Install dependencies:

```bash
yarn install
```

2. Create `.env` files in both client and server directories (use the provided examples)

3. Run development server:

```bash
yarn dev
```

## Available Scripts

- `yarn dev` - Start development servers for client and server
- `yarn build` - Build all packages and applications
- `yarn start` - Start production servers for client and server

## Architecture

This project follows a monorepo architecture with Turborepo:

- **Workspaces**: Each directory (client, server) is a workspace
- **Caching**: Turborepo caches build outputs for faster builds
- **Task Running**: Parallel execution of development/build tasks
