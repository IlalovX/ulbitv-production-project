import { AboutPage } from 'pages/about'
import { HomePage } from 'pages/home'
import React, { Suspense } from 'react'
import { NavLink, Route, Routes } from 'react-router'
import { classNames } from 'shared/lib/helpers/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import './styles/index.scss'

export default function App() {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>TOGGLE</button>
			<NavLink to={'/'}>HOME</NavLink>
			<NavLink to={'/about'}>ABOUT</NavLink>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}
