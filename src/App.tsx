import * as React from 'react'
import { Form, Button } from './components'
import { Theme } from './styles/themes/Theme'
import {
  CredentialsProvider,
  CrendentialsConsumer
} from './context/CredentialsContext/Crendentials.context'
import { useCredentials } from './hooks/useCredentials'
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

type UserState = {
  username: string
  password: string
}

interface ICredentials {
  state: UserState
  handleOnChange: (e?: Event) => React.KeyboardEventHandler<HTMLInputElement>
}

const App: React.FC = () => {
  const [state, handleChange]: any = useCredentials()

  return (
    <Theme>
      <CredentialsProvider>
        <CrendentialsConsumer>
          {({ handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <div>
                <Label for="username">Username:</Label>
                <Input
                  id="username"
                  type="text"
                  value={state.username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e, 'username')
                  }
                />
              </div>
              <div>
                <Label for="password">Password:</Label>
                <Input
                  id="password"
                  value={state.password}
                  type="password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e, 'password')
                  }
                />
              </div>
              <Button>Submit</Button>
            </StyledForm>
          )}
        </CrendentialsConsumer>
      </CredentialsProvider>
    </Theme>
  )
}

export default App
