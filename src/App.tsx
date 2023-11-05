import "./App.css";
import { Button } from './components/atoms/Button';
import Layout from './components/template/Layout';

function App() {
    return (
        <Layout>
            <div className="flex flex-col">
                <div className="flex flex-row justify-center">
                    <p className="first-letter:mt-3 text-lg font-bold font-sans text-primary underline">Welcome to our Design System</p>
                </div>
                <div className="mt-4 flex flex-row justify-center ali">
                    <p className="mr-2 font-serif text-lg text-text self-center">We have utility colors: </p>
                    <Button bgColor="mr-2 bg-primary" label="Primary" />
                    <Button bgColor="bg-secondary" label="Secondary" />
                </div>
                <div className="mt-4 flex flex-row justify-center ali">
                    <p className="mr-2 font-serif text-lg text-text self-center">We have different font sizes: </p>
                    <p className="mr-2 font-serif text-sm text-text font-bold self-center">Small</p>
                    <p className="mr-2 font-serif text-md text-text font-bold self-center">Medium</p>
                    <p className="mr-2 font-serif text-lg text-text font-bold self-center">Large</p>
                </div>
                <div className="mt-4 flex flex-row justify-center ali">
                    <p className="mr-2 font-serif text-lg text-text self-center">We have different spacing sizes: </p>
                    <p className="mr-1 font-serif text-md text-text font-bold self-center">XS</p>
                    <p className="mr-2 font-serif text-md text-text font-bold self-center">SM</p>
                    <p className="mr-3 font-serif text-md text-text font-bold self-center">MD</p>
                    <p className="mr-4 font-serif text-md text-text font-bold self-center">LG</p>
                    <p className="mr-5 font-serif text-md text-text font-bold self-center">XL</p>
                </div>
                <div className="mt-4 flex flex-row justify-center ali">
                    <p className="mr-2 font-serif text-lg text-text self-center">We support several screen sizes: </p>
                    <p className="mr-2 font-serif text-md text-text font-bold self-center sm:text-primary">sm: 480px</p>
                    <p className="mr-2 font-serif text-md text-text font-bold self-center md:text-primary">md: 768px</p>
                    <p className="mr-2 font-serif text-md text-text font-bold self-center lg:text-primary">lg: 976px</p>
                    <p className="mr-2 font-serif text-md text-text font-bold self-center xl:text-primary">xl: 1440px</p>
                </div>
            </div>
        </Layout>
    );
}

export default App;
