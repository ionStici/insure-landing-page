import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Cta } from './components/Cta';

function App() {
    return (
        <>
            <NavBar links={['How we work', 'Blog', 'Account', 'View plans']} />
            <Hero />

            <main>
                <Features />
                <Cta />
            </main>

            <footer></footer>
        </>
    );
}

export default App;

//   Our company

//   How we work
//   Why Insure?
//   View plans
//   Reviews

//   Help me

//   FAQ
//   Terms of use
//   Privacy policy
//   Cookies

//   Contact

//   Sales
//   Support
//   Live chat

//   Others

//   Careers
//   Press
//   Licenses
