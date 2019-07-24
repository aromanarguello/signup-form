import * as React from 'react'
import { Form } from './components'
import { Theme } from './styles/themes/Theme'
import {
  CredentialsProvider,
  CrendentialsConsumer
} from './context/CredentialsContext/Crendentials.context'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Label = styled(Form.Label)`
  padding: 10px;
`

const Input = styled(Form.Input)`
  margin: 10px;
`

const App = () => {
  return (
    <Theme>
      <CredentialsProvider>
        <CrendentialsConsumer>
          {({ handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <div>
                <Label for="input">Username:</Label>
                <Input id="input" type="text" />
              </div>
              <div>
                <Label for="input">Password:</Label>
                <Input id="input" type="text" />
              </div>
            </StyledForm>
          )}
        </CrendentialsConsumer>
      </CredentialsProvider>
    </Theme>
  )
}

export default App
