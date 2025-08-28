import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <button
        onClick={() => onAddTaskSubmit(title, description)}
        className="bg-slate-600 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
