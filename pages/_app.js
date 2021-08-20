import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Proxima Nova';
		font-weight: 400;
		src: url('/fonts/ProximaNova-Regular.woff2') format('woff2');
	}

	@font-face {
		font-family: 'Proxima Nova';
		font-weight: 700;
		src: url('/fonts/ProximaNova-Bold.woff2') format('woff2');
	}

	@font-face {
		font-family: 'Lyft Pro UI';
		font-weight: 600;
		src: url('/fonts/LyftProUI-Semibold.woff2') format('woff2');
	}
	
	* {
		box-sizing: border-box;
		font-family: 'Proxima Nova';
		color: #0c0b31;
		margin: 0;
		padding: 0;
	}

	h1 {
		font-family: 'Lyft Pro UI'
	}
`;

const theme = {
	colors: {
		primary: '#8b37ff',
	},
};

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
