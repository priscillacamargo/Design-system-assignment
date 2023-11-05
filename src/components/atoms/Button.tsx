interface ButtonProps {
    bgColor: string;
    label: string;
    onClick?: () => void;
}

/**
 * Button UI component for user interaction
 */
export const Button = ({ onClick, bgColor, label, ...props }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={`font-sans ${bgColor} w-12 h-12 hover:opacity-80 active:shadow-inner text-white py-2 px-4 rounded-full`}
            {...props}
        >
            {label}
        </button>
    );
};
