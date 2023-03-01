import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
    return (
        <div className="App">
            <AppRoutes />
            <ToastContainer />
        </div>
    );
}

export default App;
