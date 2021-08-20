import Meta from './meta';
import Footer from './footer';
import Header from './header';

export default function Wrapper({ children }) {
	return (
		<>
			<Meta />
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
