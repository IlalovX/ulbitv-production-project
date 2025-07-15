import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './PageLoader.module.scss'

interface PageLoaderProps {
	className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={classNames(cls.PageLoader, {}, [className])}>
			<div className='loader'></div>
		</div>
	)
}
