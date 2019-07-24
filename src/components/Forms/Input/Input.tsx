import * as React from 'react'
import styled from 'styled-components'

export interface IInputProps {
  onClick?: React.MouseEventHandler<HTMLInputElement>
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>
  placeholder?: string
  role?: string
  type: string
  id?: string
}

const StyledInput = styled.input``

const Input: React.FC<IInputProps> = props => {
  return <StyledInput {...props} />
}

Input.defaultProps = {}
Input.displayName = 'Input'

export { Input }
