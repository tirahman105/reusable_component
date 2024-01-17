import MainLayout from "./components/layout/MainLayout";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <h1>This is h1</h1>
        <h2>This is h2</h2>
        <h3>This is h3</h3>
        <button className="btn">Button</button>
      </div>
    </Container>
  );
}

export default App;
