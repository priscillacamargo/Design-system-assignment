import { ReactNode } from 'react';
import { Switch } from '@headlessui/react';

type ToggleSwitchProps = {
    onChange: (isChecked: boolean) => void;
    isChecked: boolean;
    content: ReactNode;
};

const ToggleSwitch = ({ onChange, isChecked, content }: ToggleSwitchProps) => {
    const toggle = () => {
        onChange(!isChecked);
    };

    return (
        <div className="flex flex-row">
            <label className="mr-2">{content}</label>
            <Switch checked={isChecked} onChange={toggle} className={`bg-accent relative inline-flex h-6 w-10 items-center rounded-full`}>
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${isChecked ? 'translate-x-8' : 'translate-x-1'} inline-block h-3 w-3 transform rounded-full bg-white transition`}
                />
            </Switch>
        </div>
    );
};

export default ToggleSwitch;
