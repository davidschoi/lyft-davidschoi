import styled from 'styled-components';
import davidschoi from 'davidschoi';
import Text from './text';
import LinkButton from './link-button';
import IconRides from '../public/images/icon-rides.svg';
import IconRating from '../public/images/icon-rating.svg';
import IconCar from '../public/images/icon-car.svg';

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
					min-height: 32px;

					&.flex {
						display: flex;
						align-items: center;
					}

					svg {
						margin-right: 8px;
					}
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
		{ id: 1, header: 'Driver', children: [`I think I'm a great driver`, `My wife would say otherwise`, `My dog might think it's ruff`] },
		{
			id: 2,
			header: 'Rider',
			children: [
				{ content: `233 Rides`, icon: <IconRides /> },
				{ content: `5.0 Rating`, icon: <IconRating /> },
				{ content: `${new Date().getFullYear() - 2013} Years`, icon: <IconCar /> },
			],
		},
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
									<li key={`${id}-children-${i}`} className="flex">
										{typeof child === 'string' ? (
											<Text>{child}</Text>
										) : (
											<>
												{child.icon}
												<Text>{child.content}</Text>
											</>
										)}
									</li>
								))}
							</ul>
						</div>
					);
				})}
				<div className="flex-col">
					<ul>
						<li>
							<LinkButton href={website} type="button" target="_blank" rel="noreferrer">
								davidschoi.com
							</LinkButton>
						</li>
						<li>
							<LinkButton href={linkedin} type="button" target="_blank" rel="noreferrer">
								LinkedIn
							</LinkButton>
						</li>
						<li>
							<LinkButton href={github} type="button" target="_blank" rel="noreferrer">
								GitHub
							</LinkButton>
						</li>
					</ul>
				</div>
			</div>
		</FooterStyles>
	);
}
