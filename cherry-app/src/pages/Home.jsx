import VideoChat from '../components/VideoChat'
import ThemeToggle from '../components/ThemeToggle'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="p-4 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">{t('welcome')}</h1>
      <ThemeToggle />
      <VideoChat />
    </div>
  )
}
