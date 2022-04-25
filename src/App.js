import Blocks from './components/Blocks';
import './App.css';

const blocks = [
  {
    id: 'b1',
    block: 'yellow',
  },
  {
    id: 'b2',
    block: 'green',
  },
  {
    id: 'b3',
    block: 'color',
  },
  {
    id: 'b4',
    block: `${Math.random()}`,
  },
  {
    id: 'b5',
    block: 'color',
  },
  {
    id: 'b6',
    block: `${Math.random()}`,
  }

];


function App() {
  return (
    <div className="App">
      {blocks.map(element=>{
      return <Blocks key={element.id} block={element.block}/>
    })}
    </div>
  );
}

export default App;
