import { NewTaskForm } from './components/new-task-form'
import { Todo } from './components/todo'
import { TodoList } from './components/todo-list'

export interface TaskProps {
  title: string
}

const tasks = [{ title: 'task 1' }, { title: 'task 2' }, { title: 'task 3' }]

export const App = () => (
  <main className="flex w-80 flex-col items-center justify-center gap-5 rounded-xl border border-sky-600 px-5 py-8 max-[320px]:max-w-72">
    <h1 className="text-3xl font-semibold">Todo List</h1>

    <NewTaskForm />

    <TodoList>
      {tasks.map(({ title }, i) => (
        <Todo key={i} title={title} />
      ))}
    </TodoList>
  </main>
)
