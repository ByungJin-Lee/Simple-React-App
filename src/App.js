import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutedContent from "./pages/Routes";
import Header from "./components/Header";
import StorageProvider from "./components/StorageProvider";
import DependencyProvider from "./components/DependencyProvider";

function App() {
  return (
    <div className="App">
      <DependencyProvider>
        <StorageProvider>
          <Router>
            <Header />
            <RoutedContent />
          </Router>
        </StorageProvider>
      </DependencyProvider>
    </div>
  );
}

export default App;
