# TypeScript Demo Project

## Description

This project demonstrates how to set up a TypeScript application that:

- Uses external libraries
- Implements environment variables configuration with Webpack
- Shows best practices for TypeScript project structure

## Features

- TypeScript configuration and setup
- Webpack integration for environment variables management
- External library integration example
- Development environment configuration with Webpack Dev Server

## Setup

This project requires a Google Maps API key to function. Follow these steps:

1. Get a Google Maps API Key:

   - Visit [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/get-api-key)
   - Create or select a project
   - Enable at least the following APIs:

     - Directions API
     - Maps Embed API
     - Geolocation API
     - Maps JavaScript API
     - Geocoding API
     - Maps Elevation API
     - Maps Static API

   - Create credentials (API key)

2. Set up your API key:
   - Create a `.env` file in the root directory
   - Add your API key:
     ```
     GOOGLE_MAPS_API_KEY=your_api_key_here
     ```

> :warning: **Security Note**:  
> The current implementation exposes the API key in the client-side code. For production environments, it's strongly recommended to implement a backend proxy:
>
> - Instead of making direct API calls from the frontend, route requests through your backend server
> - Keep the API key secure on the backend
> - Your backend acts as an intermediary, making the actual calls to Google Maps API
> - This prevents exposure of your API key in client-side code
>
> This proxy pattern provides better security for your API credentials in production environments.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/juanmaguitar/typescript-demo.git
   cd typescript-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Build the project:

   ```bash
   npm run build
   ```
