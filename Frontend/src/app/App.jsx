import { Provider } from "react-redux";
import { store } from "./app.store";
import { RouterProvider } from "react-router-dom";
import router from "./app.routes";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;