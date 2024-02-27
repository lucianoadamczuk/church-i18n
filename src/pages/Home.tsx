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
		<>
			<Header />
			<main>
				<About />
				<Schedule />
				<Evangelization />
				<Values />
				<Groups />
				<Theology />
				<Pray />
				<NextEvents />
				<NewCreation />
			</main>
		</>
	);
}
