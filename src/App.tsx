import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";

function App() {
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-96 border border-slate-600 p-10 rounded">
          <Button className="w-full"></Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
