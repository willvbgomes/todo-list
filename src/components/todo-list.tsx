import { ReactNode } from 'react'

interface TodoListProps {
  children: ReactNode
}

export const TodoList = ({ children }: TodoListProps) => (
  <ul className="flex w-full flex-col gap-3">{children}</ul>
)
