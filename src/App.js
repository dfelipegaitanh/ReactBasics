import "./styles.css";
// import List from "./components/List";
//import ToDoList from "./components/ToDoList";
// import Input from "./components/Input";
// import { RefInput } from "./components/RefInput";
// import RefDemo from "./components/RefDemo";
// import FocusInput from "./components/FocusInput";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

export default function App() {
  return (
    <div className="App">
      {/* <List /> */}
      {/* <ToDoList /> */}
      {/* <Stylesheet /> */}
      {/* <Input /> */}
      {/*<RefInput />*/}
      {/*<RefDemo />*/}
      {/*<FocusInput /> */}
      <ClickCounter name="Felipe" />
      <HoverCounter />
    </div>
  );
}
