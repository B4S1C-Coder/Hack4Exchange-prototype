import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

// import { Button } from './components/ui/button';
import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';

import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<HomePage />} />
  )
);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <ModeToggle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
