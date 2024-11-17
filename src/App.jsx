import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./screens/Homepage";
import LoginPage from "./screens/Auth/LoginPage";
import SignupPage from "./screens/Auth/SignUpPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path:"/login",
      element:<LoginPage />
    },
    {
      path:"/signup",
      element:<SignupPage />
    }
  ]);
  return(
    <RouterProvider router={router} />
  )
}
export default App
