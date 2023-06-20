import AsmaulHusnaGrid from '../components/asmaulhusna/AsmaulHusnaGrid';
import AsmaulBanner from '../components/shared/AsmaulBanner';
import { AsmaulProvider } from '../context/AsmaulContext';

const Asmaul = () => {
	return (
		<div className="container mx-auto">
			<AsmaulBanner></AsmaulBanner>

			<AsmaulProvider>
				<AsmaulHusnaGrid></AsmaulHusnaGrid>
			</AsmaulProvider>
		</div>
	);
};

export default Asmaul;
