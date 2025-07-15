import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import * as cls from './PageError.module.scss'

interface PageErrorProps {
	className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation()

	const reloadPage = () => {
		location.reload()
	}
	return (
		<div className={classNames(cls.PageError, {}, [className])}>
			<h1>{t('errorBoundary.fallback')}</h1>
			<Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
		</div>
	)
}
