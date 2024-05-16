import React from "react";
import "./App.css";
import { useState } from "react";

function Add({ setCards }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  // console.log("title", title);
  const contentsHandler = (event) => {
    setContents(event.target.value);
  };
  // console.log("contents", contents);

  const FormHandler = (event) => {
    event.preventDefault();
    if (!title || !contents) {
      alert("내용을 입력하세요.");
      return;
    }

    if (contents.length > 30) {
      alert("30자 이내로 작성해주세요.");
      return;
    }

    const newCard = {
      cardTitle: title,
      cardContents: contents,
      id: Date.now(),
      isDone: false,
    };
    setCards((prev) => {
      return [...prev, newCard];
    });
    setTitle("");
    setContents("");
  };

  return (
    <>
      <form className="add-form" onSubmit={FormHandler}>
        <span>제목</span>
        <input
          type="text"
          placeholder="제목을 입력하세요."
          value={title}
          onChange={titleHandler}
        />
        <span>내용</span>
        <input
          type="text"
          placeholder="내용을 입력하세요."
          value={contents}
          onChange={contentsHandler}
        />
        <button>추가</button>
      </form>
    </>
  );
}

export default Add;
