import Wrapper from '../components/wrapper';
import Head from 'next/head';
import davidschoi from 'davidschoi';
import Hero from '../components/hero';
import Section from '../components/section';
import Values from '../components/values';
import { getAllValues } from '../lib/api';

export default function Index({ allValues }) {
	const { first, last } = davidschoi.name;

	return (
		<>
			<Head>
				<title>
					{first} {last} - Lyft Front End Engineer
				</title>
			</Head>
			<Wrapper>
				<Hero />
				<Section />
				<Values content={allValues} />
			</Wrapper>
		</>
	);
}

export async function getStaticProps({ preview = false }) {
	const allValues = (await getAllValues(preview)) ?? [];
	return {
		props: { allValues },
	};
}
