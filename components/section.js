import styled from 'styled-components';
import davidschoi from 'davidschoi';
import Container from './container';
import Text from './text';
import Image from 'next/image';

const SectionStyles = styled.section`
	padding: 80px 0;
	background: rgb(235, 235, 255);

	.container {
		display: flex;
		align-items: center;
	}

	.flex-col {
		&.image-wrapper {
			width: 40%;
			order: 1;

			img {
				border-radius: 50%;
			}
		}

		&.content {
			width: 60%;
			order: 2;

			.title {
				margin-bottom: 16px;
			}
		}
	}

	p {
		margin-bottom: 8px;
	}

	@media only screen and (max-width: 824px) {
		.container {
			flex-direction: column;

			.flex-col {
				&.image-wrapper {
					width: 100%;
					text-align: center;
					margin-bottom: 24px;
				}
				&.content {
					width: 100%;
				}
			}
		}
	}
`;

export default function Section(props) {
	const { first, last } = davidschoi.name;

	return (
		<SectionStyles {...props}>
			<Container>
				<div className="flex-col image-wrapper">
					<Image src="/images/me.jpeg" alt={`${first} ${last} picture`} width={250} height={250} />
				</div>
				<div className="flex-col content">
					<Text type="title" className="title">
						{first} {last} is a path to new beginnings
					</Text>
					<Text>My mission at Lyft will be to improve people's lives with the world's best transporation. I will build and own innovative web applications using advanced JavaScript, React and Sass, with a desire to achieve exceptional design fidelity, usability, accessibility, and performance across both desktop and mobile browsers.</Text>
					<Text>I will thrive in projects that require close collaboration with other teams and orgs, working closely with creative and product designers, other engineers and stakeholders. I will be able to juggle multiple concurrent initiatives. I will champion sound frontend standards to engineers, designers, and management.</Text>
					<Text>I'm excited to join Lyft, a company that moves at an extremely fast pace and is always evolving. I am adaptable to change and will always have a great attitude.</Text>
				</div>
			</Container>
		</SectionStyles>
	);
}
