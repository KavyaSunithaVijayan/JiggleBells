import Snowfall from "react-snowfall";
import HomePage from "./pages/Homepage";
import Tree from "./component/content/Tree/tree";

function App() {
  return (
    <div className="relative flex flex-col h-full">
      {/* Content */}
      <div className="relative z-10 flex-1">
        <HomePage />
      </div>
      <footer className="fixed bottom-0 left-0 right-0 flex justify-start">
        <Tree />
        <Tree />
      </footer>
      <footer className="fixed bottom-0 left-0 right-0 flex justify-end">
        <Tree />
        <Tree />
      </footer>

      <Snowfall
        color="#FFFFFF"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10,
        }}
        snowflakeCount={60}
      />
    </div>
  );
}
export default App;
