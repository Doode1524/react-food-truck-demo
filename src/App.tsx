import Header from "./components/Header";
import { LandingPage } from "./pages/LandingPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <LandingPage />
      </div>
    </div>
  );
};

export default App;
