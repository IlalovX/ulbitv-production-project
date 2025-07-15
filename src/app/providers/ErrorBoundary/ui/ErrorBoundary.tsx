import React, { Component, ErrorInfo, ReactNode, Suspense } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { PageError } from 'widgets/PageError/ui/PageError'

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(_: Error) {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		const { hasError } = this.state
		const { children } = this.props

		if (hasError) {
			return (
				<Suspense fallback={<PageLoader />}>
					<PageError />
				</Suspense>
			)
		}

		return children
	}
}

export default ErrorBoundary
