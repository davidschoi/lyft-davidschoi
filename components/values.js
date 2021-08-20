import styled from 'styled-components';
import Container from './container';
import Text from './text';
import Image from 'next/image';
import davidschoi from 'davidschoi';

const ValuesStyles = styled.section`
	padding: 80px 0;

	.subheader {
		margin-bottom: 24px;
	}
`;

const ValueStyles = styled.div`
	display: flex;
	align-items: center;
	max-width: 824px;
	margin-bottom: 40px;
	padding-bottom: 40px;
	border-bottom: 1px solid rgba(12, 11, 49, 0.16);

	.image-wrapper {
		width: 25%;
	}

	.content {
		width: 75%;
		margin-left: 68px;

		.title {
			margin-bottom: 24px;
		}
	}

	@media only screen and (max-width: 824px) {
		flex-direction: column;

		.image-wrapper {
			width: 100%;
			margin-bottom: 24px;
		}

		.content {
			width: 100%;
			margin-left: 0;
		}
	}
`;

export default function Values(props) {
	const { content } = props;
	const { first, last } = davidschoi.name;

	return (
		<ValuesStyles>
			<Container>
				<Text type="subheader" className="subheader">
					How {first} {last} will make it happen at Lyft
				</Text>
				{content.map((value) => (
					<Value key={value.sys.id} {...value} />
				))}
			</Container>
		</ValuesStyles>
	);
}

function Value({ image, title, description }) {
	return (
		<ValueStyles>
			<div className="image-wrapper">
				<Image src={image?.url} alt={`${title} image`} height={140} width={140} />
			</div>
			<div className="content">
				<Text type="title" className="title">
					{title}
				</Text>
				<Text>{description}</Text>
			</div>
		</ValueStyles>
	);
}
