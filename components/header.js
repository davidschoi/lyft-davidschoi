import { useState } from 'react';
import styled from 'styled-components';
import davidschoi from 'davidschoi';
import LyftLogo from '../public/images/lyft-logo.svg';
import Text from './text';
import useDocumentScrollThrottled from '../hooks/useDocumentScrollThrottled';

const HeaderStyles = styled.header`
	background: #fff;
	border-bottom: 1px solid rgba(12, 11, 49, 0.16);
	position: fixed;
	top: 0;
	transition: transform 200ms cubic-bezier(0.45, 0, 1, 1) 0s;
	will-change: transform;
	height: 80px;
	width: 100%;
	z-index: 9999;

	&.hidden {
		transform: translateY(-80px);
	}

	.container {
		max-width: 1248px;
		height: 100%;
		margin: 0 auto;
		padding: 0 8px 0 24px;
		display: flex;
		align-items: center;
	}

	.logo {
		fill: #ff00bf;
		margin-right: 40px;

		&:hover {
			fill: #000;
		}
	}

	.subheader {
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
	const [shouldHideHeader, setShouldHideHeader] = useState(false);
	const MINIMUM_SCROLL = 80;

	useDocumentScrollThrottled((callbackData) => {
		const { previousScrollTop, currentScrollTop } = callbackData;
		const isScrolledDown = previousScrollTop < currentScrollTop;
		const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
		setShouldHideHeader(isScrolledDown && isMinimumScrolled);
	});

	const hiddenStyle = shouldHideHeader ? 'hidden' : '';

	return (
		<HeaderStyles className={hiddenStyle}>
			<div className="container">
				<a href="/">
					<LyftLogo className="logo" />
				</a>
				<Text type="subheader" className="subheader">
					{first} {last} - Front End Engineer
				</Text>
			</div>
		</HeaderStyles>
	);
}
