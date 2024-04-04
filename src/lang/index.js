import en from './en.json'
import hi from './hi.json'

const languages = { en, hi }

//background-colors for each lang
const bgColors = { en: 'red', hi: 'blue' }

const langDropdown = [
  { name: 'English', suffix: 'en' },
  { name: 'Hindi', suffix: 'hi' },
]

export { languages, bgColors, langDropdown }
