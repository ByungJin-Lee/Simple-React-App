import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutedContent from "./pages/Routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <RoutedContent />
      </Router>
    </div>
  );
}

export default App;
