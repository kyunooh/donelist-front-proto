import React, {useState} from "react";
import axios from "axios";

const DayComponent: React.FC<DayProps> = ({ year, month, day }: DayProps) => {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  axios
    .get(`/tasks/year/${year}/month/${month}/day/${day}`)
    .then(response => response.data)
    .then((data: Array<Task>) => setTasks(data));

  return (
    <ul>
      {tasks.map((t: Task) => {
        return (
          <li key={t.id}>
            <span>{t.startTime}</span>
            <span>{t.name}</span>
          </li>
        );
      })}
    </ul>
  );
};

interface DayProps {
  year: number;
  month: number;
  day: number;
}

class Task {
  id: number;
  dayId: number;
  memberId: number;
  name: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  createdTime: Date;
  updatedTime: Date;

  constructor(
    id: number,
    dayId: number,
    memberId: number,
    name: string,
    description: string,
    startTime: Date,
    endTime: Date,
    createdTime: Date,
    updatedTime: Date
  ) {
    this.id = id;
    this.dayId = dayId;
    this.memberId = memberId;
    this.name = name;
    this.description = description;
    this.startTime = startTime;
    this.endTime = endTime;
    this.createdTime = createdTime;
    this.updatedTime = updatedTime;
  }
}

export default DayComponent;
