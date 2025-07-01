import { Theme, useTheme } from 'app/providers/ThemeProvider'
import React from 'react'
import {
	default as DarkIcon,
	default as LightIcon,
} from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()
	return (
		<Button
			theme={ThemeButton.CLEAR}
			onClick={toggleTheme}
			className={classNames('ThemeSwitcher', {}, [className])}
		>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	)
}
