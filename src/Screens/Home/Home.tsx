import { useEffect, useState } from 'react'
import { InstagramGrid } from '../../components/InstaGrid'
import { TokenForm } from '../../components/TokenForm';
import { getUser } from '../../Services/helpers/helpers';

const Home = () => {
    const [token, setIsToken] = useState<boolean>(false);

    useEffect(() => {
        const user = getUser();
        if (user) {
            const isUser = JSON.parse(user);
            if (isUser.metaToken) {
                setIsToken(true)
            }
        }
    }, [])
    return (
        <main className='py-6'>
            {
                token ? (
                    <InstagramGrid />
                ) : (
                    <TokenForm />
                )
            }
        </main>
    )
}

export default Home
