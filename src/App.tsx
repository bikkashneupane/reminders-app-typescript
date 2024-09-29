import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./component/ReminderList";
import Reminder from "./interface/reminder";
import ReminderService from "./services/reminder";
import NewReminder from "./component/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    fetchReminders();
  }, []);

  const fetchReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };

  const handleOnReminderRemove = (id: number) => {
    setReminders(reminders.filter((item) => item.id !== id));
  };

  const onAddReminder = async (title: string) => {
    const newReminder = await ReminderService.postReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  return (
    <>
      <NewReminder onAddReminder={onAddReminder} />
      <ReminderList
        reminders={reminders}
        onRemoveReminder={handleOnReminderRemove}
      />
    </>
  );
}

export default App;
