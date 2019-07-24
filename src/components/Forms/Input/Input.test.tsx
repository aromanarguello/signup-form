import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Input } from './Input'

it('Accepts input', () => {
  const { getByPlaceholderText } = render(
    <Input placeholder="write something..." type="text" />
  )
  const inputNode = getByPlaceholderText('write something...')
  expect(inputNode.value).toBe('')
  fireEvent.change(inputNode, {
    target: { value: 'Hello' }
  })
  expect(inputNode.value).toMatch('Hello')
})
