export const indianMeals = {
  breakfast: [
    { name: "Poha with Peanuts", calories: 350, protein: 8, carbs: 55, fats: 12, tag: "Veg" },
    { name: "Moong Dal Chilla", calories: 280, protein: 15, carbs: 35, fats: 8, tag: "Veg" },
    { name: "Masala Omelette (3 Eggs)", calories: 290, protein: 18, carbs: 4, fats: 22, tag: "Non-Veg" },
    { name: "Paneer Paratha with Curd", calories: 420, protein: 16, carbs: 45, fats: 18, tag: "Veg" },
    { name: "Oats Upma", calories: 310, protein: 10, carbs: 48, fats: 8, tag: "Veg" },
    { name: "Boiled Eggs with Brown Toast", calories: 260, protein: 16, carbs: 20, fats: 12, tag: "Non-Veg" }
  ],
  lunch: [
    { name: "Chicken Curry with Roti", calories: 450, protein: 35, carbs: 40, fats: 15, tag: "Non-Veg" },
    { name: "Paneer Bhurji with Brown Rice", calories: 520, protein: 22, carbs: 50, fats: 25, tag: "Veg" },
    { name: "Rajma Chawal", calories: 480, protein: 18, carbs: 70, fats: 10, tag: "Veg" },
    { name: "Mutton Rogan Josh with Rice", calories: 580, protein: 38, carbs: 45, fats: 26, tag: "Non-Veg" },
    { name: "Palak Paneer with Roti", calories: 410, protein: 18, carbs: 35, fats: 20, tag: "Veg" },
    { name: "Soya Chunk Pulao", calories: 390, protein: 22, carbs: 55, fats: 8, tag: "Veg" }
  ],
  snacks: [
    { name: "Roasted Makhana (Lotus Seeds)", calories: 120, protein: 3, carbs: 20, fats: 2, tag: "Veg" },
    { name: "Boiled Chana Chaat", calories: 180, protein: 9, carbs: 28, fats: 3, tag: "Veg" },
    { name: "Greek Yogurt with Almonds", calories: 210, protein: 15, carbs: 12, fats: 10, tag: "Veg" },
    { name: "Whey Protein Shake", calories: 140, protein: 25, carbs: 4, fats: 2, tag: "Veg" }
  ],
  dinner: [
    { name: "Grilled Fish Tikka", calories: 320, protein: 40, carbs: 5, fats: 12, tag: "Non-Veg" },
    { name: "Dal Tadka with Quinoa", calories: 380, protein: 16, carbs: 60, fats: 8, tag: "Veg" },
    { name: "Soya Chunk Sabzi", calories: 340, protein: 25, carbs: 30, fats: 10, tag: "Veg" },
    { name: "Chicken Biryani (Low Oil)", calories: 490, protein: 32, carbs: 55, fats: 14, tag: "Non-Veg" },
    { name: "Mixed Veg Khichdi", calories: 350, protein: 12, carbs: 58, fats: 6, tag: "Veg" },
    { name: "Tandoori Chicken Salad", calories: 280, protein: 35, carbs: 10, fats: 9, tag: "Non-Veg" }
  ]
};

export const workoutPlans = {
  upper_back_biceps: [
    { name: "Pull-ups", sets: 3, reps: "8-10", target: "Back", difficulty: "Advanced", rest: "120s" },
    { name: "Lat Pulldowns", sets: 4, reps: "10-12", target: "Back", difficulty: "Intermediate", rest: "90s" },
    { name: "Barbell Rows", sets: 4, reps: "8-10", target: "Back", difficulty: "Advanced", rest: "90s" },
    { name: "Face Pulls", sets: 3, reps: "15-20", target: "Rear Delts/Upper Back", difficulty: "Beginner", rest: "60s" },
    { name: "Dumbbell Bicep Curls", sets: 3, reps: "12-15", target: "Biceps", difficulty: "Beginner", rest: "60s" },
    { name: "Hammer Curls", sets: 3, reps: "12-15", target: "Biceps", difficulty: "Beginner", rest: "60s" },
    { name: "Preacher Curls", sets: 3, reps: "10-12", target: "Biceps", difficulty: "Intermediate", rest: "60s" }
  ],
  upper_shoulders_triceps: [
    { name: "Overhead Press", sets: 4, reps: "8-10", target: "Shoulders", difficulty: "Intermediate", rest: "90s" },
    { name: "Lateral Raises", sets: 4, reps: "15-20", target: "Shoulders", difficulty: "Beginner", rest: "60s" },
    { name: "Front Raises", sets: 3, reps: "12-15", target: "Shoulders", difficulty: "Beginner", rest: "60s" },
    { name: "Rear Delt Flyes", sets: 3, reps: "15-20", target: "Rear Delts", difficulty: "Intermediate", rest: "60s" },
    { name: "Tricep Pushdowns", sets: 3, reps: "12-15", target: "Triceps", difficulty: "Beginner", rest: "60s" },
    { name: "Skull Crushers", sets: 3, reps: "10-12", target: "Triceps", difficulty: "Intermediate", rest: "60s" },
    { name: "Overhead Tricep Extensions", sets: 3, reps: "12-15", target: "Triceps", difficulty: "Beginner", rest: "60s" }
  ],
  lower_body: [
    { name: "Barbell Squats", sets: 4, reps: "8-10", target: "Quads/Glutes", difficulty: "Intermediate", rest: "120s" },
    { name: "Romanian Deadlifts", sets: 4, reps: "10-12", target: "Hamstrings", difficulty: "Intermediate", rest: "90s" },
    { name: "Leg Press", sets: 3, reps: "12-15", target: "Quads", difficulty: "Beginner", rest: "90s" },
    { name: "Walking Lunges", sets: 3, reps: "10-12 per leg", target: "Glutes/Quads", difficulty: "Intermediate", rest: "90s" },
    { name: "Leg Extensions", sets: 3, reps: "15-20", target: "Quads", difficulty: "Beginner", rest: "60s" },
    { name: "Lying Leg Curls", sets: 3, reps: "12-15", target: "Hamstrings", difficulty: "Beginner", rest: "60s" },
    { name: "Calf Raises", sets: 4, reps: "15-20", target: "Calves", difficulty: "Beginner", rest: "60s" }
  ]
};
