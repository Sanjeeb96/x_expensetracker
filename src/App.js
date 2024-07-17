import { SnackbarProvider } from "notistack";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <Home />
      </SnackbarProvider>
    </div>
  );
}

export default App;
