import styled from 'styled-components';

const ContainerStyles = styled.section`
	max-width: 1040px;
	margin: 0 auto;
	padding: 16px;
`;

export default function Container({ children }) {
	return <ContainerStyles className="container">{children}</ContainerStyles>;
}
