import { ChangeEvent, MouseEvent } from 'react'

import { Button } from './button'

import { ListPlus } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface AddTaskFormProps {
  data: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleAdd: (event: MouseEvent<HTMLButtonElement>) => void
}

export const NewTaskForm = ({
  data,
  handleChange,
  handleAdd,
}: AddTaskFormProps) => (
  <form className="flex w-full items-center gap-3">
    <input
      className="flex-1 rounded-lg border border-sky-600 bg-sky-600/10 p-3 focus:ring-0"
      type="text"
      onChange={handleChange}
      value={data}
      placeholder="New task..."
    />

    <Button
      className={twMerge(
        'size-7 transition-colors',
        data.length > 0
          ? 'hover:text-sky-600'
          : 'cursor-not-allowed opacity-60',
      )}
      type="submit"
      onClick={handleAdd}
      icon={ListPlus}
      disabled={data.length === 0}
    />
  </form>
)
