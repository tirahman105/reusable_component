import { FormEvent, useState } from "react";
import MainLayout from "./components/layout/MainLayout";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Clicked");
    if (true) {
      handleModalClose();
    }
  };
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h1>This is modal header</h1>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <p>This is modal content</p>
          <form onSubmit={handleSubmit} className="bg-slate-300 p-10">
            <input type="text" className="p-2 rounded mx-1" />
            <button className="bg-blue-100" type="submit">
              Submit
            </button>
          </form>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
