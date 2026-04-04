import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance API",
      version: "1.0.0",
      description: "Finance dashboard backend APIs"
    },
    servers: [
      {
        url: "http://localhost:5000"
      }
    ],
    components: {
  securitySchemes: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT"
    }
  }
}
  },
  apis: ["./src/routes/*.js"] // scans your routes
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;