import { useState, useEffect } from "react";
import "./App.css";
var app = window.pc.app;
console.log("pc", app);
function App() {
  const [isLoaded, setLoaded] = useState(false);
  const completeLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    app.on("playcanvas#load", completeLoad);
    return () => {
      app.off("playcanvas#load", completeLoad);
    };
  }, []);

  if (!isLoaded) return;
  return (
    <div className="App">
      <div>asdf</div>
    </div>
  );
}

export default App;
