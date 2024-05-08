import { NewTaskForm } from './components/new-task-form'

export const App = () => (
  <main className="flex w-80 flex-col items-center justify-center gap-5 rounded-xl border border-sky-600 px-5 py-8 max-[320px]:max-w-72">
    <h1 className="text-3xl font-semibold">Todo List</h1>

    <NewTaskForm />
  </main>
)
