import React, { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router'
import { classNames } from 'shared/lib/classNames/classNames'
import * as cls from './AppLink.module.scss'

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red',
}

interface AppLinkProps extends NavLinkProps {
	className?: string
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props
	return (
		<NavLink
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</NavLink>
	)
}
