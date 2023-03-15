import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Cta } from './components/Cta';
import { Footer } from './components/Footer';
import { ErrorComponent } from './components/ErrorComp';
import {
    RouterProvider,
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

const Root = function () {
    return (
        <>
            <NavBar links={['How we work', 'Blog', 'Account', 'View plans']} />
            <Hero />
            <main>
                <Features />
                <Cta />
            </main>
            <Footer
                // prettier-ignore
                ourCompany={['How we work', 'Why Insure?', 'View plans', 'Reviews',]}
                helpMe={['FAQ', 'Terms of use', 'Privacy policy', 'Cookies']}
                contact={['Sales', 'Support', 'Live chat']}
                others={['Careers', 'Press', 'Licenses']}
            />
        </>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />} errorElement={<ErrorComponent />} />
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
