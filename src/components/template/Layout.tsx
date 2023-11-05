import { ReactNode, useState } from 'react';
import ToggleSwitch from '../atoms/toggle-switch';
import { FaMoon, FaSun } from 'react-icons/fa';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = (isChecked: boolean) => {
        setIsDarkMode(isChecked);
        // You can also save the user's preference in local storage or a state management solution.
    };

    return (
        <div className={`${isDarkMode ? 'dark' : 'light'} bg-background min-h-screen p-5`}>
            <header className="flex flex-row">
                <div className="basis-2/3 text-text text-lg text-bold">Logo</div>
                <div className="basis-1/3">
                    <ToggleSwitch
                        classes="justify-end"
                        onChange={toggleDarkMode}
                        isChecked={isDarkMode}
                        content={isDarkMode ? <FaMoon className="text-primary" /> : <FaSun className="text-primary" />}
                        a11Content="Toggle dark mode"
                    />
                </div>
            </header>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
};

export default Layout;
