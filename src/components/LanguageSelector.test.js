import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import LanguageSelector from './LanguageSelector'
import { AuthProvider } from '../context/AuthContext'

describe('LanguageSelector', () => {
    test('renders with default value and changes language', () => {
        const { getByTestId } = render(
            <AuthProvider>
                <LanguageSelector />
            </AuthProvider>,
        )
        let field = getByTestId('language-select')
        expect(field).toHaveValue('en')

        fireEvent.change(field, { target: { value: 'hi' } })
        expect(field.value).toBe('hi')

        fireEvent.change(field, { target: { value: 'en' } })
        expect(field.value).toBe('en')
    })
})
