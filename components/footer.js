import styled from 'styled-components';
import davidschoi from 'davidschoi';
import Text from './text';
import LinkButton from './link-button';

const FooterStyles = styled.footer`
	background: linear-gradient(rgb(231, 231, 239) 0%, rgb(244, 244, 250) 5%, rgb(255, 255, 255) 10%);
	padding: 32px 16px 60px;

	.container {
		max-width: 1024px;
		margin: 0 auto;
		display: flex;
		align-items: flex-start;

		.flex-col {
			flex: 1 0 0;
			padding-top: 32px;

			.footer-header {
				padding-bottom: 24px;
			}

			ul {
				list-style-type: none;

				li {
					margin-bottom: 8px;
				}
			}
		}
	}

	@media only screen and (max-width: 824px) {
		.container {
			flex-wrap: wrap;

			.flex-col {
				flex: 100% 0 0;
			}
		}
	}
`;

export default function Footer() {
	const { website, linkedin, github, name } = davidschoi;
	const { first, last } = name;
	const FOOTER_CONTENT = [
		{ id: 1, header: 'Driver', children: [`I think I'm a great driver`, `My wife might say otherwise`, `My dog might say it's ruff`] },
		{ id: 2, header: 'Rider', children: [`233 Rides`, `5.0 Rating`, `8.2 Years`] },
		{ id: 3, header: 'Lyft', children: [`${first} ${last}`, `Front End Engineer`, `United States`] },
	];
	return (
		<FooterStyles>
			<div className="container">
				{FOOTER_CONTENT.map((footer) => {
					const { id, header, children } = footer;
					return (
						<div className="flex-col" key={id}>
							<Text type="subheader" className="footer-header">
								{header}
							</Text>
							<ul>
								{children.map((child, i) => (
									<li key={`${id}-children-${i}`}>
										<Text>{child}</Text>
									</li>
								))}
							</ul>
						</div>
					);
				})}
				<div className="flex-col">
					<ul>
						<li>
							<LinkButton href={website} type="button" target="_blank">
								davidschoi.com
							</LinkButton>
						</li>
						<li>
							<LinkButton href={linkedin} type="button" target="_blank">
								LinkedIn
							</LinkButton>
						</li>
						<li>
							<LinkButton href={github} type="button" target="_blank">
								GitHub
							</LinkButton>
						</li>
					</ul>
				</div>
			</div>
		</FooterStyles>
	);
}
