import { useRouter } from 'next/router';
import { getLocatedContent } from '../src/content';

const Home: React.FC = () => {
    const router = useRouter();

    const content = getLocatedContent(router);

    return <h1>{content.hero.greeting}</h1>;
};

export default Home;
