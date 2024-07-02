import { BrowserRouter } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import { Toaster } from "sonner";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComp />
        <main>
          <Toaster richColors />
          <RoutesView />
        </main>
        <FooterComp />
      </div>
    </BrowserRouter>
  );
};

export default App;
