import './App.css';
import Column from './components/Column';
import Card from './components/Card';

function App() {
  let cards =<Card title="Card title" description="Card description" />
;

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
      </main>
    </div>
  );
}

export default App;
