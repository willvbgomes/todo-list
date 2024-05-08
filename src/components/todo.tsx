import { Button } from './button'
import { TaskProps } from '../app'

import { SquareCheckBig, Trash2 } from 'lucide-react'

interface TodoProps extends TaskProps {}

export const Todo = ({ title }: TodoProps) => (
  <li className="flex items-center gap-3 rounded-lg border-l-2 border-l-transparent py-2 pl-3">
    <span className="flex-1">{title}</span>

    <Button
      className="size-5 transition-colors hover:text-emerald-400"
      icon={SquareCheckBig}
    />

    <Button
      className="size-5 transition-colors hover:text-red-500"
      icon={Trash2}
    />
  </li>
)
