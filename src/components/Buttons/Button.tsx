import * as react from 'react'
import styled from 'styled-components'

interface IButtonProps {
  onClick: () => React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const StyledButton = styled.button``

const Button: React.FC = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}
