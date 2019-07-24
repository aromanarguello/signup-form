import * as React from 'react'

const { Provider, Consumer } = React.createContext<any>(null)

interface IUser {
  username: string
  password: string
}

interface IProvider {
  children: React.ReactNode
}

const passwordValidation = (password: string) => {
  const passwordValidationRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

  if (password === '') console.log('Enter a Password')

  if (!password.match(passwordValidationRegex)) {
    console.log(
      `Your password needs to be 6-20 characters.\n\n
       At least 1 number, 1 uppercase letter, and a symbol`
    )
  }
}

const handleSubmit = (username: string, password: string) => {
  if (username === '') console.log('Enter Username')
  passwordValidation(password)
}

const CredentialsProvider: React.FC<IProvider> = ({ children }) => {
  return (
    <Provider
      value={{
        handleSubmit
      }}
    >
      {children}
    </Provider>
  )
}

export { CredentialsProvider, Consumer as CrendentialsConsumer }
