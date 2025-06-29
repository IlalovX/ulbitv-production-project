import React, { Suspense } from 'react'
import { NavLink, Route, Routes } from 'react-router'
import { classNames } from './helpers/classNames/classNames'
import { AboutPage } from './pages/about/About.async'
import { HomePage } from './pages/home/Home.async'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

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
