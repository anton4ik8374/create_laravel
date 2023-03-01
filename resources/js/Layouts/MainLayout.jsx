import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Main({ children }) {
    return (
        <div className={'w-96 mx-auto pt-8'}>
                {children}

        </div>
    );
}
