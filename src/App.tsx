import { Outlet } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import { ThemeProvider } from "./providers/theme.provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
