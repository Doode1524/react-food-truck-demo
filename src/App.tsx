import Header from "./components/Header";
import Footer from "./components/Footer";
import { LandingPage } from "./pages/LandingPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <LandingPage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
