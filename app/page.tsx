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
      </header>
      <ul></ul>
    </div>
  );
}
