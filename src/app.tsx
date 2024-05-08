import { ChangeEvent, MouseEvent, useState } from 'react'

import { NewTaskForm } from './components/new-task-form'
import { Todo } from './components/todo'
import { TodoList } from './components/todo-list'

import { v4 as uuidv4 } from 'uuid'

export interface TaskProps {
  id: string
  title: string
  isCompleted: boolean
}

export const App = () => {
  const [inputData, setInputData] = useState('')
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setInputData(target.value)

  const handleAddButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    setTasks(prev => [
      ...prev,
      { id: uuidv4(), isCompleted: false, title: inputData },
    ])
    setInputData('')
  }

  const handleCompleteButtonClick = (id: string) =>
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    )

  const handleDeleteButtonClick = (id: string) =>
    setTasks(prev => prev.filter(task => task.id !== id))

  return (
    <main className="flex w-80 flex-col items-center justify-center gap-5 rounded-xl border border-sky-600 px-5 py-8 max-[320px]:max-w-72">
      <h1 className="text-3xl font-semibold">Todo List</h1>

      <NewTaskForm
        data={inputData}
        handleChange={handleInputChange}
        handleAdd={handleAddButtonClick}
      />

      <TodoList>
        {tasks.map(({ id, isCompleted, title }) => (
          <Todo
            key={id}
            id={id}
            isCompleted={isCompleted}
            title={title}
            handleComplete={handleCompleteButtonClick}
            handleDelete={handleDeleteButtonClick}
          />
        ))}
      </TodoList>
    </main>
  )
}
