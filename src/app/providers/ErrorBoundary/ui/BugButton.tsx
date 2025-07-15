import React, { useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface BugButtonProps {
	className?: string
}

export const BugButton = ({ className }: BugButtonProps) => {
	const [error, setError] = useState(false)
	const onThrow = () => setError(true)

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])
	return (
		<div onClick={onThrow} className={classNames('', {}, [className])}>
			throw error
		</div>
	)
}
