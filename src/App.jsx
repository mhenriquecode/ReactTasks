import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudos",
      description: "Estudar programação",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Dois Estudos",
      description: "Estudar sociais",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Três Estudos",
      description: "Estudar geografia",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        // ...task = tudo que já estava na tarefa
        //!task.isCompleted = colocando o valor do insCompleted como True
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
