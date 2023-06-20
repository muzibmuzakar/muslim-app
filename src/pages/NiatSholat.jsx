import NiatSholatGrid from '../components/niatSholat/NiatSholatGrid';
import NiatSholatBanner from '../components/shared/NiatSholatBanner';
import { NiatSholatProvider } from '../context/NiatSholatContext';

const NiatSholat = () => {
	return (
		<div className="container mx-auto">
			<NiatSholatBanner></NiatSholatBanner>

			<NiatSholatProvider>
				<NiatSholatGrid></NiatSholatGrid>
			</NiatSholatProvider>
		</div>
	);
};

export default NiatSholat;
