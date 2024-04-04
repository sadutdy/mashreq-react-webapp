import React from 'react'
import { render, waitFor, act } from '@testing-library/react'
import { AuthProvider } from '../../context/AuthContext'

import userEvent from '@testing-library/user-event'
import Login from './Login'

import '@testing-library/jest-dom/extend-expect' // To use jest-dom assertions

import users from '../../data/users.json'

const invalidUser = { email: 'sdfasd@dsfadf.com', password: 'sdfsdf' }
const validUser = users[0]

describe('Loging', () => {
    test('check login screen is rendered successfully', () => {
        const { getByTestId } = render(
            <AuthProvider>
                <Login />
            </AuthProvider>,
        )

        expect(getByTestId('login-email')).toBeInTheDocument()
        expect(getByTestId('login-password')).toBeInTheDocument()
        expect(getByTestId('submit-button')).toBeInTheDocument()
        return
    })

    test('input check on email and password', async () => {
        const { getByTestId } = render(
            <AuthProvider>
                <Login />
            </AuthProvider>,
        )

        // Find input fields
        const emailInput = getByTestId('login-email')
        const passwordInput = getByTestId('login-password')
        const submitButton = getByTestId('submit-button')
        return act(() => {
            userEvent.type(emailInput, 'sdfsdf')
            userEvent.type(passwordInput, 'dsfsdf')
            userEvent.click(submitButton)
        })
    })

    test('login validation ', async () => {
        const { getByTestId } = render(
            <AuthProvider>
                <Login />
            </AuthProvider>,
        )

        // // Find input fields
        const emailInput = getByTestId('login-email')
        const passwordInput = getByTestId('login-password')
        const submitButton = getByTestId('submit-button')

        //email id required validation
        act(() => {
            userEvent.click(submitButton)
        })

        await waitFor(() => {
            expect(getByTestId('login-error-span')).toHaveTextContent(
                'Please enter valid email addres',
            )
        })

        //email id non-valid-email validation
        act(() => {
            userEvent.type(emailInput, 'nonEmailIdText')
            userEvent.click(submitButton)
        })

        expect(getByTestId('login-error-span')).toHaveTextContent(
            'Please enter valid email addres',
        )

        //email id valid-email validation and empty password
        act(() => {
            userEvent.type(emailInput, 'sample@gmail.com')
            userEvent.click(submitButton)
        })

        expect(getByTestId('login-error-span')).toHaveTextContent(
            'Password Required',
        )
    })

    test('login with credetails ', async () => {
        const { getByTestId, queryByTestId } = render(
            <AuthProvider>
                <Login />
            </AuthProvider>,
        )

        // // Find input fields
        const emailInput = getByTestId('login-email')
        const passwordInput = getByTestId('login-password')
        const submitButton = getByTestId('submit-button')

        //login with invalid credetials
        act(() => {
            userEvent.type(emailInput, invalidUser.email)
            userEvent.type(passwordInput, invalidUser.password)
            userEvent.click(submitButton)
        })

        await waitFor(() => {
            expect(getByTestId('login-error-span')).toHaveTextContent(
                'Inavlid credetials , Please try again',
            )
        })

        //login with valid credetials , refer src/data/users.json for valid user details
        act(() => {
            userEvent.clear(emailInput)
            userEvent.clear(passwordInput)
            userEvent.type(emailInput, validUser.email)
            userEvent.type(passwordInput, validUser.password)
            userEvent.click(submitButton)
        })

        //expecting the error span to be null
        await waitFor(() => {
            expect(queryByTestId('login-error-span')).toBeNull()
        })
    })
})
