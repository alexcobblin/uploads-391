import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";

export default function App() {
  const router = createBrowserRouter([
    { path: "*", Component: Root }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

