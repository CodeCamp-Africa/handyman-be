# Handyman Backend

The backend API for the **Handyman** application. This service handles the application's server-side operations, database connectivity, and API endpoints.

## Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Programming Language:** TypeScript
- **Database:** MongoDB Atlas
- **ODM:** Mongoose

## Project Structure

```text
handyman-be/
├── src/
│   ├── config/          # Database and application configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Helper functions
│   ├── app.ts           # Express application configuration
│   └── server.ts        # Server entry point
├── .env.example         # Example environment configuration
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Getting Started

Follow these instructions to set up the backend locally.

### 1. Prerequisites

Ensure you have the following installed:

- Node.js
- npm
- Git
- A MongoDB Atlas account

### 2. Clone the Repository

```bash
git clone https://github.com/CodeCamp-Africa/handyman-be.git
```

Navigate into the project directory:

```bash
cd handyman-be
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root by copying the example file.

For Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Open `.env` and provide the required configuration:

```env
NODE_ENV=development
PORT=5000

MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_jwt_secret
JWT_EXPIRES_IN=1d

CLIENT_URL=http://localhost:5173
```

**Important:**
- Replace the MongoDB URI placeholder with your own MongoDB Atlas connection string.
- Generate a strong, private JWT secret.
- Never commit or share your `.env` file.
- The JWT variables are reserved for authentication implementation, and `CLIENT_URL` is intended for frontend CORS configuration.

### 5. Run the Development Server

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server with automatic restarts |
| `npm run build` | Compiles TypeScript into JavaScript |
| `npm start` | Starts the compiled application |
| `npm run typecheck` | Checks TypeScript for errors |

## API Health Check

The backend currently provides a health-check endpoint:

**Endpoint:** `GET /health`

**Local URL:**

```text
http://localhost:5000/health
```

A successful response:

```json
{
  "status": "ok",
  "message": "Handyman API is running"
}
```

## Database Configuration

The application uses MongoDB Atlas for database hosting and Mongoose for database connectivity.

Ensure that:

- Your MongoDB Atlas cluster is available.
- Your database user credentials are correctly configured.
- Your IP address is allowed in MongoDB Atlas Network Access.
- Your `MONGODB_URI` is correctly configured in `.env`.

## Security

- Environment files containing secrets must never be committed.
- The `.env.example` file should be maintained to guide developers during setup.
- Never expose database credentials, JWT secrets, or other sensitive configuration values.

## Project Status

**Current stage:** Initial backend setup completed.

Implemented:
- Express server initialization.
- TypeScript configuration.
- MongoDB Atlas connection.
- Health-check endpoint.
- Environment variable configuration.

Additional API routes, models, authentication, and business logic will be implemented as development progresses.

## Contributing

Team members should create feature branches for their assigned tasks and follow the project's agreed Git workflow when submitting changes.