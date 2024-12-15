import { useEffect, useState } from 'react';
import { InstagramGrid } from '../../components/InstaGrid';
import { TokenForm } from '../../components/TokenForm';
import { getUser } from '../../Services/helpers/helpers';

const Home = () => {
    const [token, setIsToken] = useState<boolean>(false);

    useEffect(() => {
        const checkToken = () => {
            const user = getUser();
            if (user) {
                const isUser = JSON.parse(user);
                setIsToken(!!isUser.metaToken); 
            } else {
                setIsToken(false);
            }
        };

        checkToken();

        // Add an event listener to listen for storage changes
        window.addEventListener('storage', checkToken);

        // Cleanup the listener
        return () => {
            window.removeEventListener('storage', checkToken);
        };
    }, []);

    return (
        <main className="py-6">
            {token ? <InstagramGrid /> : <TokenForm onSuccess={() => setIsToken(true)} />}
        </main>
    );
};

export default Home;
