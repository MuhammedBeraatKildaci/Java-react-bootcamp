import List from "./components/List";
import { names } from "./data";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <List names={names} />
    </>
  );
}

export default App;
