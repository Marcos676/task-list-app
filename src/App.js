import './App.css';
import Column from './components/Column';
import Card from './components/Card';
import Modal from './components/Modal';

import { useState } from 'react';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  

  let cards =<Card title="Card title" description="Card description" />;
  let createFields = {
    title: "Modal title",
    legend: "description modal",
    inputs: [
      {
        label: "campo 1",
        type: "text",
        name: "title",
        value: "Card title"
      },
      {
        label: "campo 2",
        type: "text",
        name: "description",
        value: "Card description"
      }
    ],
    buttons: [
      {
        label: "Guardar",
        onClick: () => console.log('save')
      },
      {
        label: "Cancelar",
        onClick: () => console.log('cancel')
      }
    ]
  };

  return (
    <div className="App">
      <header className="App-header">
        Mi Lista de tareas
      </header>
      <main>
        <Column title="To do" childrens={cards}>
          
        </Column>
        <Column title="In progress" childrens={cards}>
          <Card title="Card title" description="Card description" />
          <Card title="Card title" description="Card description" />
        </Column>
        <Column title="Done" childrens={cards}>
          <Card title="Card title" description="Card description" />
        </Column>
        <button onClick={() => setIsOpenModal(true)}>Crear tarjeta</button>
        <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} children={createFields} />
      </main>
    </div>
  );
}

export default App;
