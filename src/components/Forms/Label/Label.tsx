import * as React from 'react'
import styled from 'styled-components'

const StyledLabeled = styled.label``

export interface ILabelProps {
  children?: React.ReactNode
  for: string
}

const Label: React.FC<ILabelProps> = props => {
  return <StyledLabeled {...props}>{props.children}</StyledLabeled>
}

Label.displayName = 'Label'
Label.defaultProps = {}

export { Label }
