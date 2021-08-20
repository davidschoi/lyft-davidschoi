import styled from 'styled-components';

const LinkButtonStyles = styled.a`
	font-weight: bold;
	text-decoration: none;
	border: 1px solid #0c0b31;
	padding: 8px 24px;
	height: 48px;
	width: 200px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 56px;
	cursor: pointer;
	transition: opacity 200ms cubic-bezier(0.45, 0, 0.15, 1) 0s;
	will-change: opacity;

	&:hover {
		background-image: linear-gradient(rgba(12, 11, 49, 0.1), rgba(12, 11, 49, 0.1));
	}
`;

const PrimaryButtonStyles = styled(LinkButtonStyles)`
	background-color: #8b37ff;
	border-color: transparent;
	color: #fff;
`;

export default function LinkButton({ type = 'default', children, ...rest }) {
	const LINK_BUTTON_DICTIONARY = {
		primary: <PrimaryButtonStyles {...rest}>{children}</PrimaryButtonStyles>,
		default: <LinkButtonStyles {...rest}>{children}</LinkButtonStyles>,
	};

	return !!LINK_BUTTON_DICTIONARY[type] ? LINK_BUTTON_DICTIONARY[type] : <LinkButtonStyles {...rest}>{children}</LinkButtonStyles>;
}
