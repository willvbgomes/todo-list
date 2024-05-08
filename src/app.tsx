import { ChangeEvent, MouseEvent, useState } from 'react'

import { NewTaskForm } from './components/new-task-form'
import { Todo } from './components/todo'
import { TodoList } from './components/todo-list'

export interface TaskProps {
  title: string
}

export const App = () => {
  const [inputData, setInputData] = useState('')
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setInputData(target.value)

  const handleAddButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    setTasks(prev => [...prev, { title: inputData }])

    setInputData('')
  }

  return (
    <main className="flex w-80 flex-col items-center justify-center gap-5 rounded-xl border border-sky-600 px-5 py-8 max-[320px]:max-w-72">
      <h1 className="text-3xl font-semibold">Todo List</h1>

      <NewTaskForm
        data={inputData}
        handleChange={handleInputChange}
        handleAdd={handleAddButtonClick}
      />

      <TodoList>
        {tasks.map(({ title }, i) => (
          <Todo key={i} title={title} />
        ))}
      </TodoList>
    </main>
  )
}
