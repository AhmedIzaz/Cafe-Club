import category_routes from "./categoryRoutes.js";
import food_routes from "./foodRoutes.js";
import authRoutes from "./authRoutes.js";
const routers = [
  {
    path: "/categories",
    handler: category_routes,
  },
  {
    path: "/foods",
    handler: food_routes,
  },

  {
    path: "/auth",
    handler: authRoutes,
  },
];

const mainRoutes = (app) => {
  routers.forEach((route) => app.use(route.path, route.handler));
};

export default mainRoutes;
