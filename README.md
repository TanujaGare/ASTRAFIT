# AstraFit - Premium Fitness Tracking Application

![AstraFit Preview](https://via.placeholder.com/1200x600/18181b/6d28d9?text=AstraFit+-+Your+Ultimate+Fitness+Companion)

**Live Demo:** [https://TanujaGare.github.io/ASTRAFIT/](https://TanujaGare.github.io/ASTRAFIT/)

AstraFit is a modern, feature-rich web application designed to help users achieve their fitness goals through personalized workout planning, dynamic meal tracking, and cutting-edge AI features. Built with modern web technologies, it features a sleek glassmorphism UI tailored for a premium user experience.

🚀 Features
---
- User authentication (login/register UI)
- AI Food Scanner (Identifies meals via machine learning)
- Dynamic Meal Planner with extensive food database
- Interactive Workout Planner with active session stopwatch
- Progress dashboard with weight trends and habit tracking
- Fully responsive modern glassmorphism design

🛠️ Tech Stack
---
- **Frontend:** React.js, Vite, Tailwind CSS, Framer Motion
- **Machine Learning:** TensorFlow.js, MobileNet
- **Data Visualization:** Chart.js, React-Chartjs-2
- **Version Control:** Git & GitHub

📦 Installation
---
Clone the repository:
```bash
git clone https://github.com/TanujaGare/ASTRAFIT.git
```

Navigate to the directory:
```bash
cd ASTRAFIT
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

🤖 AI Scanner Details
---
The flagship feature of AstraFit is the AI Food Scanner. By leveraging `TensorFlow.js`, the application downloads a neural network directly into the client's browser. When a user uploads a photo of their meal, the model runs local inference to classify the image and algorithmically reverse-engineers a mathematically accurate macronutrient profile.
