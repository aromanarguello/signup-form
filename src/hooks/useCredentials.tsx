import * as React from 'react'

const userData = {
  username: '',
  password: ''
}

type State = {
  [key: string]: string
}

const reducer = (prevState: State, updatedProp: State) => ({
  ...prevState,
  ...updatedProp
})

const useCredentials = () => {
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
  return [state, handleChange]
}

export { useCredentials }
