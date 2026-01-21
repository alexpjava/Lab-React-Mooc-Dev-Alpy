import Counter from "./SandBox/Counter.jsx";

export default function App() {
  const example = "counter"; // cambia aquí

  return (
    <div>
      <h1>Laboratorio React</h1>

      {example === "counter" && <Counter />}
    </div>
  );
}
