import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useTranslation } from 'react-i18next'

export default function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext)
  const { t } = useTranslation()
  return (
    <button className="p-2 border rounded" onClick={toggleTheme}>
      {t('toggle_theme')}
    </button>
  )
}
