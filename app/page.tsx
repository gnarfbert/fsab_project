import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <title>
        Todo List
      </title>
      <header>
       <h1>
        Hello! Welcome to Your To Do List
      </h1>
      <button><Link href="/newTask">New Task</Link></button>
      <h2>Current Tasks:</h2>
      <ul>
        <li>
          Test Task
        </li>
      </ul>
      <h2>Completed Tasks:</h2>
      <ul>
        <li>
          Test task
        </li>
      </ul>
      </header>
    </div>
  );
}
