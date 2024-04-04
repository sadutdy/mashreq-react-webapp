import React from 'react'
import { useAuth } from '../context/AuthContext'

//componets to select the language from dropdown

export default function LanguageSelector() {
    const { lang, changeLang } = useAuth()

    const handleLangChange = (e) =>
        changeLang(() =>
            e.target.value !== '' ? changeLang(e.target.value) : changeLang(lang),
        )
    return (
        <select
            className="lang-selector"
            onChange={handleLangChange}
            value={lang}
            data-testid="language-select"
        >
            <option value={''}> Select Langage</option>
            <option value={'en'}> English</option>
            <option value={'hi'}> Hindi</option>
        </select>
    )
}
