import { useState } from "react";
import "./App.css";
import Todo from "./Todo.jsx";
import Header from "./Header.jsx";
import Add from "./Add.jsx";
function App() {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  // const DoneHandler = () => {
  //   // setcards([input 값 넣기])
  // }

  return (
    <>
      <div className="layout">
        <Header />
        <Add setCards={setCards} />
        <div className="working">
          <h2>Working..🔥</h2>
          <div className="working-list">
            {cards.map((addcard) => {
              if (addcard.isDone === false) {
                return (
                  <Todo
                    key={addcard.id}
                    title={addcard.cardTitle}
                    contents={addcard.cardContents}
                    id={addcard.id}
                    isDone={addcard.isDone}
                    cards={cards}
                    setCards={setCards}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="done">
          <h2>Done.. 🎉</h2>
          <div className="working-done-list">
            {cards.map((addcard) => {
              if (addcard.isDone === true) {
                return (
                  <Todo
                    key={addcard.id}
                    title={addcard.cardTitle}
                    contents={addcard.cardContents}
                    id={addcard.id}
                    isDone={addcard.isDone}
                    cards={cards}
                    setCards={setCards}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
