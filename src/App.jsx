import './App.css';
import MusicGroup from './components/MusicGroup';

function App() {
  const groupData = {
    name: 'Samurai Cats',
    peoples: ['Иван', 'Анна', 'Хироши'],
    albums: [
      { title: 'Путь Самурая', pathToCaver: './images/Samurai.jpg' },
      { title: 'CITCAT', pathToCaver: './images/Cat.jpg' }
    ]
  };

  return (
    <div className="App">
      <MusicGroup {...groupData} />
    </div>
  );
}

export default App;
