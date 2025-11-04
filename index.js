require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");
// ROUTES
const adminAuthRoutes = require("./routes/admin.authenticate.routes.js")
const jobRoutes = require("./routes/jobs.routes.js");
const ExperienceRoutes = require("./routes/users.routers/experience.router.js")
const { validateSessions } = require("./middleware/checkSessions.js");
const userRoutes = require("./routes/users.routers/users.routes.js")
const EducationRoutes = require("./routes/users.routers/education.router.js")
const JobApplicationRoutes = require("./routes/jobApplication.router.js")
// APP INITIATION 
const app = express()

console.log(2)
//MIDDLEWARE
const corsOptions = {
  origin: [
    // local 
    'http://localhost:5173',
    'http://localhost:5174',
    // vercel 
    'https://emplify-admin.vercel.app',
    'https://testing.kuldeepchavda.in',
    'https://placement-frontend-3sp7.onrender.com',
    "https://placement-main.vercel.app"],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  };
  console.log(1)
  app.use(cors(corsOptions));
  console.log(3)
  // app.options("*", cors(corsOptions));
  console.log(4)
  app.use(express.json());
  console.log(5)
  app.use(cookieParser());
  console.log(6)
  console.log(7)


require("./config/DatabaseConfig")();
require("./config/passPortConfig")(passport)

// PASSPORT CONFIG  
app.use(passport.initialize());

// ROUTES 
app.use("/auth/admin", adminAuthRoutes);
app.use(validateSessions);
app.use("/user", userRoutes);
app.use("/job", jobRoutes);
app.use("/experience", ExperienceRoutes);
app.use("/education", EducationRoutes);
app.use("/apply", JobApplicationRoutes);


// START SERVER
const port = 5000;
app.listen(port, () => {
  console.log(`Server running at ${process.env.PORT}.`)
});
