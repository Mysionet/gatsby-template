import * as React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from '../assets/theme'
import GlobalStyle from '../assets/globalStyle'
import Component from '../components/Component'

const IndexPage = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<h1>template</h1>
			<Component />
		</ThemeProvider>
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title>
