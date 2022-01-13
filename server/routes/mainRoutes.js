import category_routes from "./categoryRoutes.js";
import food_routes from "./foodRoutes.js";
import authRoutes from "./authRoutes.js";
import cartRoute from "./cartRoute.js";
import orderRoute from "./orderRoute.js";
const routers = [
  {
    path: "/category",
    handler: category_routes,
  },
  {
    path: "/food",
    handler: food_routes,
  },

  {
    path: "/auth",
    handler: authRoutes,
  },
  {
    path: "/cart",
    handler: cartRoute,
  },
  {
    path: "/order",
    handler: orderRoute,
  },
];

const mainRoutes = (app) => {
  routers.forEach((route) => app.use(route.path, route.handler));
};

export default mainRoutes;
