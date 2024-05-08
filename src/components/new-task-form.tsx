import { Button } from './button'

import { ListPlus } from 'lucide-react'

export const NewTaskForm = () => (
  <form className="flex w-full items-center gap-3">
    <input
      className="flex-1 rounded-lg border border-sky-600 bg-sky-600/10 p-3 focus:ring-0"
      type="text"
      placeholder="New task..."
    />

    <Button className="size-7" type="submit" icon={ListPlus} />
  </form>
)
