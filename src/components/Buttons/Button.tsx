import * as React from 'react'
import styled from 'styled-components'

interface IButtonProps {
  onClick?: () => React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
}

const StyledButton = styled.button``

const Button: React.FC<IButtonProps> = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
