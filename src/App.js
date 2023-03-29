import "./assets/App.css";
import FormPage from "./containers/FormPage";
import HomePage from "./containers/HomePage";
import InfoPage from "./containers/InfoPage";
import SliderPage from "./containers/SliderPage";

function App() {
  return (
    <div>
      <HomePage />
      <InfoPage />
      <SliderPage />
      <FormPage />
    </div>
  );
}

export default App;
