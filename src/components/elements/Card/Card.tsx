type Props = {
    children?: React.ReactNode;
    className?: string;
};

export const Card: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <section
            className={`relative flex items-center flex-wrap w-full max-w-2xl sm:rounded-2xl overflow-hidden sm:shadow-xl ${className}`}
        >
            {children}
        </section>
    );
};
