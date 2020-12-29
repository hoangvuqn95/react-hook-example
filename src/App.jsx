import { useEffect, useState } from "react";
import "./App.css";
import queryString from "query-string";
import ColorBox from "./components/ColorBox";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import BoxColor from "./components/BoxColor";
import BetterClock from "./components/BetterClock";
import MagicBox from "./components/MagicBox";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! :)" },
    { id: 2, title: "We love Easy Frontend! :)" },
    { id: 3, title: "They love Easy Frontend! :)" },
  ]);

  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  // title_like: 'quis', cai 'quis' la ben backend quy dinh
  useEffect(() => {
    async function fetchPostList() {
      // ...
      try {
        // _limit=10&_page=1
        //
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list", error.message);
      }
    }

    fetchPostList();
  }, [filters]);

  const handlePageChange = (newPage) => {
    console.log("New Page", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  // function xoa 1
  const handleTodoClick = (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) {
      return;
    }

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);

    setTodoList(newTodoList);
  };

  // func them 1 - tu TodoForm
  const handleTodoFormSubmit = (formValues) => {
    console.log("Form Submit: ", formValues);
    // add new todo to current todo list

    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    // ...formValues la de lay tat ca cac key co trong list

    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  const handleFiltersChange = (newFilters) => {
    console.log("New Filters", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
      // title_like do backend qui dinh, cu giu nguyen code
    });
  };
  // func for PostFiltersForm search

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      <h1>React Hooks -PostList</h1>
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

      {/* <TodoForm onSubmit={handleTodoFormSubmit}/> */}
      {/* <PostFiltersForm onSubmit={handleFiltersChange} />

      <PostList posts={postList} />

      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}

      {/* {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide clock</button> */}

      {/* <Clock />
      <BetterClock /> */}

      {/* <BoxColor /> */}

      <MagicBox />
    </div>
  );
}

export default App;

// dau ... giu tat ca cac gia tri hien tai
// Noi dung trong hook:
// colorBox - TodoList - TodoForm (useState)
// cal Api bao gom: async - await, [], ()()
// pagination tich hop voi API: cai query-string

// Yarn add query-string / npm i --save query-string
// MAterial-ui: CssBaseline dung cho ap dung reset ve khuon mau chung cho cac web
