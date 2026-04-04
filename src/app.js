import express from "express";
import authRoutes from "./routes/auth.routes.js";
import recordRoutes from "./routes/record.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
 import { protect } from "./middlewares/auth.middleware.js";
 import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);


app.get("/api/test", protect, (req, res) => {
  res.json({
    message: "Protected route working",
    user: req.user
  });
});

export const allowRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied"
      });
    }
    next();
  };
};
export default app;