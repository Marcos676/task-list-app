import "./App.css";
import Column from "./components/Column";
import Modal from "./components/Modal";

import { useState } from "react";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [cards, setCards] = useState([]);

  let lists = [
    { name: "To do", cards: [], backgroundColor: "bc-red" },
    { name: "In progress", cards: [], backgroundColor: "bc-blue" },
    { name: "Done", cards: [], backgroundColor: "bc-brown" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    let newCards = [
      ...cards,
      {
        title: e.target.elements[1].value,
        description: e.target.elements[2].value,
        status: "To do",
      },
    ];
    setCards(newCards);
    console.log(cards);
    setIsOpenModal(false);
  };

  let createFields = {
    title: "Modal title",
    legend: "description modal",
    inputs: [
      {
        tag: "input",
        label: "Titulo",
        type: "text",
        name: "title",
        placeholder: "Card title",
      },
      {
        tag: "textarea",
        label: "Descripción",
        type: "text",
        name: "description",
        placeholder: "Card description",
      },
    ],
    buttons: [
      {
        label: "Guardar",
        onClick: () => console.log("Guardar"),
        type: "submit",
      },
      {
        label: "Cancelar",
        onClick: () => setIsOpenModal(false),
        type: "button",
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">Mi Lista de tareas</header>
      <main>
        {lists.map((list, index) => (
          <Column
            key={index}
            title={list.name}
            childrens={cards.filter((card) => card.status === list.name)}
            backgroundColor={list.backgroundColor}
          />
        ))}
        <button onClick={() => setIsOpenModal(true)}>Crear tarjeta</button>
        <Modal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          children={createFields}
          submit={handleSubmit}
        />
      </main>
    </div>
  );
}

export default App;
