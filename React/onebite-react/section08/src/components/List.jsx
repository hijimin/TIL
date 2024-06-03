import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos; // 내가 원래 받아왔던것을 전체배열 리턴
    }
    return todos.filter(
      // todos배열에 filter
      (todo) => todo.content.toLowerCase().includes(search.toLowerCase()) // 내가 검색한 search의 값과 맞는지 비교, todo에는 필터된 값들로 추려져서 배열에 담김
    );
  };

  const filtetedTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filtetedTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
