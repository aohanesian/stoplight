import "./App.css";
import { StopLight } from "./Components/StopLight";

function App() {
  return (
    <div className="page">
      <StopLight />
      <StopLight initialState="go" />
      <StopLight />
      <StopLight initialState="slow" />
      <StopLight />
      <StopLight initialState="slow" />
      <StopLight initialState="go" />
      <StopLight />
      <StopLight />
    </div>
  );
}

export default App;
