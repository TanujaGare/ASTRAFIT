# AstraFit - Premium Fitness Tracking Application

![AstraFit Preview](https://via.placeholder.com/1200x600/18181b/6d28d9?text=AstraFit+-+Your+Ultimate+Fitness+Companion)

**Live Demo:** [https://TanujaGare.github.io/ASTRAFIT/](https://TanujaGare.github.io/ASTRAFIT/)

AstraFit is a modern, feature-rich web application designed to help users achieve their fitness goals through personalized workout planning, dynamic meal tracking, and cutting-edge AI features. Built with modern web technologies, it features a sleek glassmorphism UI tailored for a premium user experience.

## ✨ Key Features

- **🤖 AI Food Scanner:** Leverages on-device Machine Learning (TensorFlow.js & MobileNet) to analyze food images uploaded by the user. It accurately identifies meals and dynamically calculates mathematically sound macronutrients (Calories, Protein, Carbs, Fats) instantly in the browser.
- **🏋️ Interactive Workout Planner:** A fully interactive workout dashboard with an active stopwatch session timer, live tracking, and animated status transitions.
- **🥗 Dynamic Meal Planner:** Provides an extensive database of balanced Indian meals organized by breakfast, lunch, dinner, and snacks, tracking real-time macronutrient progress.
- **📈 Progress Tracking Dashboard:** Visualizes user consistency, body weight trends, and habit adherence using responsive Chart.js graphs.
- **🎨 Modern UI/UX:** Built using Tailwind CSS and Framer Motion for buttery-smooth micro-animations, glowing elements, and a dark-mode "glassmorphism" aesthetic.

## 🛠️ Tech Stack

- **React.js** - For building the user interface
- **Tailwind CSS** - For beautiful, responsive styling
- **TensorFlow AI** - For the machine learning food scanner
- **Chart.js** - For the interactive progress graphs
- **Framer Motion** - For the smooth animations

## 🚀 Getting Started Locally

If you'd like to run this project on your local machine, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/TanujaGare/ASTRAFIT.git
   cd ASTRAFIT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## 📱 Features in Action

### The AI Food Scanner
The flagship feature of AstraFit is the AI Food Scanner. By leveraging `TensorFlow.js`, the application downloads a neural network directly into the client's browser. When a user uploads a photo of their meal, the model runs local inference to classify the image and algorithmically reverse-engineers a highly accurate macronutrient profile based on the classification.

