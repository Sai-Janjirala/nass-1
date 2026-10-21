# Wayfinder - Travel Destination Explorer

A modern, responsive travel discovery web application built with **Next.js 16**, **React 19**, and **Tailwind CSS**. Wayfinder catalogs curated global destinations organized by geographic region, terrain, and transit networks.

## ✨ Features

- **Dynamic Regional Filtering**: Filter through curated destinations across East Asia, Scandinavia, Southern Europe, Central & South America, and more in real time.
- **Rich Destination Profiles**: Detailed destination specifications including geographic coordinates (WGS84), elevation, regional jurisdiction tags, best travel seasons, and recommended trip lengths.
- **Transit & Arrival Intelligence**: Comprehensive local transit guidance, airport links, and high-speed rail connections for each destination.
- **Trip Planning Overview**: Structured 3-step trip planning notes and guidelines for travelers.
- **Regional Collections Index**: Explore destinations grouped by continental divisions and terrain types.
- **Custom Spatial 404 Handler**: Clean, user-friendly not-found page with suggested shortcuts for unmapped routes.
- **Fully Responsive Design**: Optimized typography and layouts across mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: ESLint 9

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js 18+ installed on your machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd travel_destination_explorer_next2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📁 Project Structure

```
travel_destination_explorer_next2/
├── app/
│   ├── about/              # About Wayfinder project info
│   ├── destinations/
│   │   └── [slug]/         # Dynamic destination detail routes
│   ├── overview/           # Trip planning guidelines & overview
│   ├── regions/            # Regional collections index
│   ├── layout.tsx          # Root layout and persistent navigation
│   ├── page.tsx            # Main destination catalogue & filters
│   ├── not-found.tsx       # Custom 404 error page
│   └── globals.css         # Global styles & Tailwind configuration
├── data/
│   ├── destinationData.js  # Curated destination records & metadata
│   └── regionData.js       # Continental divisions and terrain data
├── public/                 # Static brand assets and icons
└── package.json            # Project dependencies and scripts
```

## 📄 License

This project is licensed under the MIT License.
