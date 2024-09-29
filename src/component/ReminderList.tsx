import Reminder from "../interface/reminder";
interface ReminderListProps {
  reminders: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ reminders, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {reminders.map((item) => (
        <li className="list-group-item" key={item.id}>
          <span>{item.title}</span>
          <button
            className="btn btn-outline-danger mx-2 rounded-pill"
            onClick={() => onRemoveReminder(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
