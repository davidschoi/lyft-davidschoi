import styled from 'styled-components';
import Meta from './meta';
import Footer from './footer';
import Header from './header';

const MainStyles = styled.main`
	margin-top: 80px;
`;

export default function Wrapper({ children }) {
	return (
		<>
			<Meta />
			<Header />
			<MainStyles>{children}</MainStyles>
			<Footer />
		</>
	);
}
