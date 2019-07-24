import * as React from 'react'
import { Form, Button } from './components'
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

const userData: IUser = {
  username: '',
  password: ''
}

interface IUser {
  username: string
  password: string
}

const reducer = (prevState: any, updatedProp: any) => ({
  ...prevState,
  ...updatedProp
})

const App: React.FC = () => {
  const [state, setState] = React.useReducer(reducer, userData)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    e.preventDefault()
    key === 'username'
      ? setState({ username: e.target.value })
      : setState({ password: e.target.value })
  }

  console.log(state)
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e, 'username')
                  }
                />
              </div>
              <div>
                <Label for="password">Password:</Label>
                <Input
                  id="password"
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
