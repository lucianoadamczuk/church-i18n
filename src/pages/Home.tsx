import { Suspense } from 'react';
import {
	About,
	Evangelization,
	Groups,
	NewCreation,
	NextEvents,
	Pray,
	Schedule,
	Theology,
	Values,
} from '../layout/home';
import { Header } from '../layout/shared';

export default function Home() {
	return (
		<Suspense fallback={<p>loading</p>}>
			<Header />
			<About />
			<Schedule />
			<Evangelization />
			<Values />
			<Groups />
			<Theology />
			<Pray />
			<NextEvents />
			<NewCreation />
		</Suspense>
	);
}
