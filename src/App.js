import "./assets/App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button buttonType={"dark-btn"} type="button">
          BOOK NOW
        </Button>
      </header>
    </div>
  );
}

export default App;
