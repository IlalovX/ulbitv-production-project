import { BugButton } from 'app/providers/ErrorBoundary'
import React from 'react'
import { useTranslation } from 'react-i18next'

function Home() {
	const { t } = useTranslation('main')
	return (
		<div>
			<BugButton />
			{t('Главная страница')}
		</div>
	)
}

export default Home
