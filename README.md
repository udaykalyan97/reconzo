# Indian Postal Data Viewer

A web application that allows users to select an Indian state and fetch detailed postal data (pincodes and districts) using the [Data.gov.in API](https://data.gov.in/). The app is built with React and TailwindCSS.

## ✨ Features

- Select a state via buttons or dropdown menu
- Fetch postal data from an open government API
- Display:
  - Total unique pincodes
  - Number of districts
- Responsive and accessible UI
- Environment variables used for secure API key handling

## 🚀 Live Demo

👉 [Live Website](https://reconzo.vercel.app)

👉 [GitHub Repository](https://github.com/udaykalyan97/reconzo)

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: TailwindCSS
- **Deployment**: Vercel
- **API Source**: [data.gov.in Postal Data API](https://data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd)

## 📦 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/udaykalyan97/reconzo.git
   cd reconzo
   ```
2. **Install Dependencies**
   ```bash
    npm install
    ```
3. **Configure Environment Variables**
    Create a .env file in the root directory and add your API key:
    ```bash 
    VITE_API_KEY=your_api_key_here
    
4. **Start Development Server**
    ```bash
    npm run dev
    ```
5. **Build for Production**
    ```bash
    npm run build
    ```

