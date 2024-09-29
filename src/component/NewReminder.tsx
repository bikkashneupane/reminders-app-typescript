import { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}
const NewReminder = ({ onAddReminder }: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="title"></label>
      <input
        id="title"
        type="text"
        value={title}
        className="form-control"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mx-2 rounded-pill my-2">
        Add Reminder
      </button>
    </form>
  );
};

export default NewReminder;
