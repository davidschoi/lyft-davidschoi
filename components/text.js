import styled from 'styled-components';

const SubheaderStyles = styled.h4`
	text-transform: uppercase;
	font-weight: bold;
	font-size: 16px;
	line-height: 20px;
`;

const HeaderStyles = styled.h1`
	font-size: 80px;
	line-height: 92px;
	font-weight: 600;
`;

const TitleStyles = styled.h3`
	font-size: 36px;
	line-height: 44px;
`;

const ParagraphStyles = styled.p`
	font-size: 16px;
	line-height: 22px;
`;

export default function Text({ type = 'default', children, ...rest }) {
	const TEXT_DICTIONARY = {
		subheader: <SubheaderStyles {...rest}>{children}</SubheaderStyles>,
		header: <HeaderStyles {...rest}>{children}</HeaderStyles>,
		title: <TitleStyles {...rest}>{children}</TitleStyles>,
		default: <ParagraphStyles {...rest}>{children}</ParagraphStyles>,
	};

	return !!TEXT_DICTIONARY[type] ? TEXT_DICTIONARY[type] : <ParagraphStyles {...rest}>{children}</ParagraphStyles>;
}
