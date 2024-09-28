import "./App.css";
import ReminderList from "./component/ReminderList";
import Reminder from "./interface/reminder";

const items: Reminder[] = [
  { id: 1, title: "Reminder 1" },
  { id: 2, title: "Reminder 2" },
];

function App() {
  return (
    <>
      <ReminderList items={items} />
    </>
  );
}

export default App;
