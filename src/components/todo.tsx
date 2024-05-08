import { Button } from './button'
import { TaskProps } from '../app'

import { SquareCheckBig, Trash2 } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface TodoProps extends TaskProps {
  handleComplete: (id: string) => void
  handleDelete: (id: string) => void
}

export const Todo = ({
  id,
  isCompleted,
  title,
  handleComplete,
  handleDelete,
}: TodoProps) => (
  <li
    className={twMerge(
      'flex items-center gap-3 rounded-lg border-l-2 py-2 pl-3',
      isCompleted ? ' border-l-emerald-400' : ' border-l-transparent',
    )}
  >
    <span
      className={twMerge(
        'flex-1',
        isCompleted ? 'line-through opacity-60' : null,
      )}
    >
      {title}
    </span>

    <Button
      className={twMerge(
        'size-5 transition-colors',
        isCompleted
          ? 'text-emerald-400 opacity-60 hover:text-zinc-50 hover:opacity-100'
          : 'hover:text-emerald-400',
      )}
      icon={SquareCheckBig}
      onClick={() => handleComplete(id)}
    />

    <Button
      className="size-5 transition-colors hover:text-red-500"
      icon={Trash2}
      onClick={() => handleDelete(id)}
    />
  </li>
)
