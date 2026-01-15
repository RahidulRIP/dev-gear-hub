# 🛠️ DevGear Hub - Premium Tech for Developers

DevGear Hub is a specialized e-commerce platform offering a curated selection of mechanical keyboards, ergonomic chairs, and modern tech accessories. It is designed with the primary goal of helping developers create smarter, more efficient, and comfortable workspaces.

## 🌐 Live Demo

- **Frontend:** [https://dev-gear-hub.vercel.app/]
- **Backend API:** [https://dev-gear-hub-backend.onrender.com]

---
📖 Short Description
DevGear Hub is a robust Full-Stack MERN application built with Next.js (App Router). It serves as a curated marketplace for developers to discover top-tier tech gadgets and workspace essentials. The platform allows users to browse items dynamically through a modern interface and provides a dedicated admin panel to seamlessly add new gear to the database.

---

🚀 Implemented Features & Brief Explanation
Dynamic Hero Slider: A premium slider built using Swiper.js that highlights the latest products and featured arrivals with smooth transitions.

Category Showcase: Automatically fetches unique categories from MongoDB and displays the live count of items available in each category.

Advanced Item Management: A fully responsive administrative form that allows users to add new gear to the collection (including Name, Brand, Price, Rating, and Image URL).

Interactive UI/UX: Features a high-end look and feel using Glassmorphism effects, smooth animations, and seamless loop sliders.

Universal Responsiveness: Fully optimized with Tailwind CSS to ensure a consistent and fluid experience across mobile, tablet, and desktop devices.

Live Stats & Feedback: Displays real-time data like "Items Sold" and "Happy Devs" alongside a dedicated Testimonials section for community trust.

---

## 🗺️ Route Summary

### **Frontend Routes:**

Frontend Routes:
/ – Homepage: Featuring the Hero Slider, Category Showcase, Stats, FAQ, and Newsletter.

/items – All Items Page: A complete listing of all available gear with filtering capabilities.

/items/add – Add Item Page: A responsive admin form for adding new tech gear to the database.

/about – About Page: Overview of the company’s mission, story, and core values.

### **Backend API Endpoints:**
GET /api/items – Fetches the complete list of products from MongoDB.

POST /api/items – Saves a new gear entry into the database.

GET /api/categories – Retrieves unique categories along with their respective item counts.

---

## 🛠️ Setup & Installation

1.  **Clone the Repo:**

    ```bash
    git clone (https://github.com/RahidulRIP/dev-gear-hub)
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file:

    ```env
    NEXT_PUBLIC_API_URL=(https://dev-gear-hub-backend.onrender.com/api)
    ```

4.  **Run Development Mode:**
    ```bash
    npm run dev
    ```

## 🤝 Contact

If you have any questions, feel free to reach out!
**GitHub:** (https://github.com/RahidulRIP)
