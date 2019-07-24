import * as React from 'react'
import { Input, IInputProps } from '../Input/Input'
import { Label, ILabelProps } from '../Label/Label'
import styled from 'styled-components'

interface IFormProps {
  onSubmit?: () => React.KeyboardEventHandler<HTMLInputElement>
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  direction?: 'vertical' | 'horizon'
}

interface IFormComposition {
  Input: React.FC<IInputProps>
  Label: React.FC<ILabelProps>
}

const widthSizes = {
  small: '300px',
  medium: '600px',
  large: '900px'
}

const heightSizes = {
  small: '300px',
  medium: '800px',
  large: '1100px'
}

const StyledForm = styled.form<IFormProps>`
  border: ${({
    theme: {
      colors: { navy }
    }
  }) => `1px solid ${navy}`};
  width: ${({ size }) => (size ? widthSizes[size] : widthSizes['small'])};
  height: ${({ size }) => (size ? heightSizes[size] : heightSizes['small'])};
`

const Form: React.FC<IFormProps> & IFormComposition = props => {
  return <StyledForm {...props}>{props.children}</StyledForm>
}

Form.displayName = 'Form'

Form.Input = Input
Form.Label = Label

export default Form
