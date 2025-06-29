import { ThemeProvider } from 'app/providers/ThemeProvider'
import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './app/App'

ReactDom.createRoot(document.getElementById('root')).render(
	<>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</>
)
