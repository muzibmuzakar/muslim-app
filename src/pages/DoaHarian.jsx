import DoaGrid from '../components/doaharian/DoaGrid';
import DoaBanner from '../components/shared/DoaBanner';
import { DoaProvider } from '../context/DoaContext';

const DoaHarian = () => {
	return (
		<div className="container mx-auto">
			<DoaBanner></DoaBanner>

			<DoaProvider>
				<DoaGrid></DoaGrid>
			</DoaProvider>
		</div>
	);
};

export default DoaHarian;
