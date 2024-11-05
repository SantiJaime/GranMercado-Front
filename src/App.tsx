import { BrowserRouter } from "react-router-dom";
import RoutesView from "./routes/RoutesView";
import { Toaster } from "sonner";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import { CartProvider } from "./context/Cart";
const App = () => {
  return (
    <CartProvider>
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
    </CartProvider>
  );
};

export default App;
