import styled from 'styled-components';
import Container from './container';
import Text from './text';
import Image from 'next/image';
import davidschoi from 'davidschoi';
import LinkButton from './link-button';

const HeroStyles = styled.section`
	.container {
		display: flex;
		padding: 64px 16px;
	}

	.subheader {
		margin-bottom: 16px;
	}

	.header {
		margin-bottom: 32px;
	}

	.flex-col {
		&.content {
			width: 60%;
			order: 1;
		}

		&.image-wrapper {
			width: 40%;
			order: 2;
		}
	}

	.button-container {
		a {
			margin-right: 8px;
		}
	}

	@media only screen and (max-width: 824px) {
		.flex-col.content {
			width: 100%;
		}

		.image-wrapper {
			display: none;
		}

		.button-container {
			a {
				margin-bottom: 8px;
			}
		}
	}
`;

export default function Hero() {
	const { email } = davidschoi;

	return (
		<HeroStyles>
			<Container>
				<div className="flex-col content">
					<Text type="subheader" className="subheader">
						Lyft &amp; David
					</Text>
					<Text type="header" className="header">
						Let's grow together
					</Text>
					<div className="button-container">
						<LinkButton type="primary" href="/dchoi-resume.pdf" target="_blank">
							Resume
						</LinkButton>
						<LinkButton href={`mailto:${email}?subject=Greetings David!&body=Wow great website. I hope you enjoyed your interview with Lyft!`} type="button" target="_blank" rel="noreferrer">
							Email
						</LinkButton>
					</div>
				</div>
				<div className="flex-col image-wrapper">
					<Image src="/images/life-at-lyft.jpeg" alt="Life at Lyft" width={400} height={300} />
				</div>
			</Container>
		</HeroStyles>
	);
}
