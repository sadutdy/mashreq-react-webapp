import React from 'react'
import { render, act } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect' // To use jest-dom assertions
import userEvent from '@testing-library/user-event'

import Welcome from './Welcome'
import { CustomWrapper, sampleUser } from './CustomContextWrapper'

describe('User Welcome Screen', () => {
  test('check authContext is set and welcome screen rendered successfully', async () => {
    const { getByTestId } = render(<Welcome />, { wrapper: CustomWrapper })
    //check custom context user values are set correctly
    expect(getByTestId('user-welcome-span')).toHaveTextContent(
      `Welcome ${sampleUser.name}`,
    )

    //check custom context lang values are set correctly
    expect(getByTestId('user-selected-lang-span')).toHaveTextContent(
      `Your selected language is : ${sampleUser.lang}`,
    )

    let field = getByTestId('language-select')

    return act(() => {
      userEvent.selectOptions(field, 'hi')
      expect(field).toHaveValue('hi')
    })
  })
})
