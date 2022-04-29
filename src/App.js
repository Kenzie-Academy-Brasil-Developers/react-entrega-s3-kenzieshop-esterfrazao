import products from "./database";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {products.map((product, index) => (
          <img key={index} src={product.img} alt="imagem" />
        ))}
      </header>
    </div>
  );
}

export default App;
