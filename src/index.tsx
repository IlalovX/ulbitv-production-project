import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App'
import ThemeProvider from './theme/ThemeProvider'

ReactDom.createRoot(document.getElementById('root')).render(
	<>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</>
)
