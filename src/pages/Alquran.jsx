import AlquranGrid from '../components/alquran/AlquranGrid';
import AlquranBanner from '../components/shared/AlquranBanner';
import { AlquranProvider } from '../context/AlquranContext';

const Alquran = () => {
	return (
		<div className="container mx-auto">
			<AlquranBanner></AlquranBanner>

			<AlquranProvider>
				<AlquranGrid></AlquranGrid>
			</AlquranProvider>
		</div>
	);
};

export default Alquran;
