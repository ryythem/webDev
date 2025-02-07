import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
const app = new Hono();

app.post("/api/v1/signup", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
  }).$extends(withAccelerate());
  return c.text("Signup route");
});

app.post("/api/v1/signin", (c) => {
  return c.text("Signin Route");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Blog route");
});

app.put("/api/v1/blog", (c) => {
  return c.text("hello");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("hello");
});

export default app;
