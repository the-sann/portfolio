import img_weather from "../../src/assets/project_image/weather_app.png";
import img_school_laravel from "../../src/assets/project_image/school_laravel_project.png";
import img_pos from "../../src/assets/project_image/pos.png";
import img_kimsannquiz from "../../src/assets/project_image/kimsannquiz.png";
import img_todo from "../../src/assets/project_image/todo_screenshot.png";

export const data = {
  weather: [
    {
      id: 1,
      img: img_weather,
      title: "Weather App",
      description: "A weather application built with React.",
      demo: "https://frontend-mentor-kimsann.netlify.app/",
      src_code: "https://github.com/username/weather",
    },
  ],
  adminDashboard: [
    {
      id: 1,
      img: img_school_laravel,
      title: "Admin Dashboard",
      description:
        "This is a school project from the Laravel term. It has been deployed with Digital Ocean. Note: DNS configuration is pending.",
      demo: "http://206.189.88.223",
      src_code: "https://github.com/the-sann/laravel-school-project",
    },
  ],
  express: [
    {
      id: 1,
      img: img_pos,
      title: "POS System",
      description:
        "A full-stack application using Sequelize, Express, ShadcnUI, integrated with Aba Payway, React TypeScript, TanstackForm, Axios, and Zod for validation.",
      demo: "https://sala-it-express-learning-frontend.vercel.app/",
      src_code: "https://github.com/SANN-py/salaIt_express_learning_frontend",
    },
  ],
  quizApp: [
    {
      id: 1,
      img: img_kimsannquiz,
      title: "Quiz App",
      description:
        "A basic quiz application built using React state and TailwindCSS.",
      demo: "https://kimsannquiz.netlify.app/",
      src_code: "https://github.com/SANN-py/quiz_app",
    },
  ],
  todoApp: [
    {
      id: 1,
      img: img_todo,
      title: "Todo App",
      description: "A simple todo application built with React.",
      demo: "https://example.com",
      src_code: "https://github.com/SANN-py/todo",
    },
  ],
};
