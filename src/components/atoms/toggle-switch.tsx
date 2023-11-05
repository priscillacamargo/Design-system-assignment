import { ReactNode } from 'react';
import { Switch } from '@headlessui/react';

type ToggleSwitchProps = {
    onChange: (isChecked: boolean) => void;
    isChecked: boolean;
    content?: ReactNode;
    classes?: string;
    a11Content?: string;
};

const ToggleSwitch = ({ onChange, isChecked, content, a11Content, classes }: ToggleSwitchProps) => {
    const toggle = () => {
        onChange(!isChecked);
    };

    return (
        <div className={`flex flex-row ${classes}`}>
            <label className="mr-2">{content}</label>
            <Switch checked={isChecked} onChange={toggle} className={`bg-primary relative inline-flex h-6 w-10 items-center rounded-full`}>
                <span className="sr-only">{a11Content}</span>
                <span
                    className={`${isChecked ? 'translate-x-8' : 'translate-x-1'} inline-block h-3 w-3 transform rounded-full bg-white transition`}
                />
            </Switch>
        </div>
    );
};

export default ToggleSwitch;
