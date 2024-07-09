import { ButtonHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export const Btn: React.FC<Props> = forwardRef<HTMLButtonElement, Props>(({ className = '', ...props }, ref) => (
    <button
        ref={ref}
        {...props}
        className={cn(
            `flex items-center justify-center w-full h-12 lg:h-12 font-medium px-5 rounded-full text-white bg-darkGray transition-opacity duration-300 hover:opacity-80 ${className}`,
            {
                'pointer-events-none bg-slate-300': props.disabled,
            }
        )}
    />
));
