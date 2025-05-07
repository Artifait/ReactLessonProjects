import './App.css'
import Book from './components/Book'

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-8 text-center">Крутое WEB приложение</h1>

      <div className="flex flex-col items-center space-y-4">
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
