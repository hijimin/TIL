import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "세미 프로젝트 하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "넷플릭스 보기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  const onUpdate = (targetId) => {
    // todos state 값들 중에
    // targetId와 일치하는 id를 갖는 todoItem의 isDone속성 값을 변경
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo; // 일치하지않으면 일반적인 todo반환
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List onUpdate={onUpdate} todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
