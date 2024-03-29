import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId", 
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  //
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("./pages/MyFavoriteRecipes"),
  },
  {
    path: "/family",
    name: "family",
    component: () => import("./pages/MyFamilyRecipes"),
  },
  {
    path: "/created",
    name: "created",
    component: () => import("./pages/MyRecipes"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/About"),
  },
  //
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
