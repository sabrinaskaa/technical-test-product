import { ListProduct, FormProduct } from "./components";
import "./App.css";

function App() {
  return (
    <div className="appWrap">
      <h1 className="heading1">Product App</h1>
      <ListProduct />
      <FormProduct />
    </div>
  );
}

export default App;
