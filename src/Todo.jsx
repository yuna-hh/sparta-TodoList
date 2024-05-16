import "./App.css";
function Todo({ title, contents, id, cards, setCards, isDone }) {
  const onclickDelete = (clickedId) => {
    const filteredId = cards.filter((card) => {
      return card.id !== clickedId;
    });
    setCards(filteredId);
  };

  const onclickDone = (id) => {
    const isDoneCard = cards.map((el) => {
      return el.id === id
        ? {
            ...el,
            isDone: !el.isDone,
          }
        : el;
    });
    setCards(isDoneCard);
  };
  // console.log(cards);
  return (
    <>
      <div className="working-card">
        <h3>{title}</h3>
        <p>{contents}</p>
        <button
          className="working-delete-btn"
          onClick={() => {
            onclickDelete(id);
          }}
        >
          삭제하기
        </button>

        {isDone === true ? (
          <button
            className="working-done-btn"
            onClick={() => {
              onclickDone(id);
            }}
          >
            취소
          </button>
        ) : (
          <button
            className="working-done-btn"
            onClick={() => {
              onclickDone(id);
            }}
          >
            완료
          </button>
        )}
      </div>
    </>
  );
}
export default Todo;
