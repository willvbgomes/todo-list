import { ComponentProps, ElementType } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  icon: ElementType
}

export const Button = ({ icon: Icon, ...props }: ButtonProps) => (
  <button {...props}>
    <Icon className="size-full" />
  </button>
)
