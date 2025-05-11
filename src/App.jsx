import './App.css'
import Book from './components/Book'

function App() {
  return (
    <div>
      <h1>Библиотека</h1>
      <div className="books-container">
        <Book
          title="Мёртвые души"
          firstName="Николай"
          lastName="Гоголь"
          pageCount={436}
          textReview="Типикал рашен стори"
        />
        <Book
          title="Преступление и наказание"
          firstName="Фёдор"
          lastName="Достоевский"
          pageCount={671}
          textReview="Глубокая психологическая драма"
        />
        <Book
          title="Анна Каренина"
          firstName="Лев"
          lastName="Толстой"
          pageCount={864}
          textReview="Роман о любви и трагедии"
        />
        <Book
          title="Мастер и Маргарита"
          firstName="Михаил"
          lastName="Булгаков"
          pageCount={470}
          textReview="Фантазия, сатира и философия"
        />
      </div>
    </div>
  );
}


export default App
