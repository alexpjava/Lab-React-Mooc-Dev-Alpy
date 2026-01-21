import Counter from "./SandBox/Counter.jsx";
import Scientists from "./SandBox/Scientists.jsx";

export default function App() {
  const example = "counter"; // cambia aquí

  return (
    <div>
      <h1>Laboratorio React</h1>

      {example === "counter" && <Counter />}
      {example === "scientists" && <Scientists />}
    </div>
  );
}
