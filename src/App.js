import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import Alquran from './pages/Alquran';
import Asmaul from './pages/Asmaul';
import DoaHarian from './pages/DoaHarian';
import NiatSholat from './pages/NiatSholat';
import Surah from './pages/Surah';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));


function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-slate-900 transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route
								path="projects/single-project"
								element={<ProjectSingle />}
							/>
							<Route
								path="al-quran"
								element={<Alquran />}
							/>
							<Route
								path="asmaul-husna"
								element={<Asmaul />}
							/>
							<Route
								path="doa-harian"
								element={<DoaHarian />}
							/>
							<Route
								path="niat-sholat"
								element={<NiatSholat />}
							/>
							<Route
								path="al-quran/surah"
								element={<Surah />}
							/>

							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
