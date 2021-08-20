import Image from 'next/image';
import styled from 'styled-components';
import davidschoi from 'davidschoi';
import LyftLogo from '../public/images/lyft-logo.svg';
import Text from './text';

const HeaderStyles = styled.header`
	border-bottom: 1px solid rgba(12, 11, 49, 0.16);

	.container {
		max-width: 1248px;
		height: 80px;
		margin: 0 auto;
		padding: 0 8px 0 24px;
		display: flex;
		align-items: center;
	}

	.logo {
		fill: #ff00bf;
		margin-right: 24px;

		&:hover {
			fill: #000;
		}
	}

	.header-title {
		border-left: 1px solid rgba(12, 11, 49, 0.16);
		height: 100%;
		display: flex;
		align-items: center;
		padding-left: 24px;
	}

	@media only screen and (max-width: 824px) {
		.header-title {
			border-left: 0;
			padding-left: 0;
		}
	}
`;

export default function Header() {
	const { first, last } = davidschoi.name;
	return (
		<HeaderStyles>
			<div className="container">
				<a href="/">
					<LyftLogo className="logo" />
				</a>
				<div className="header-title"></div>
				<Text type="subheader">
					{first} {last} - Front End Engineer
				</Text>
			</div>
		</HeaderStyles>
	);
}
