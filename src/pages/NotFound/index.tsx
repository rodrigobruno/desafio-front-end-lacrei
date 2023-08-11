import Hero from 'components/Hero';
import { Container } from './style';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Página não encontrada - Lacrei</title>
                <meta
                    name='description'
                    content='Oh não! Parece que você se aventurou em território desconhecido. A página que você está procurando não pode ser encontrada.'
                />
            </Helmet>

            <Container>
                <Hero
                    title='Página não encontrada'
                    lead='Oh não! Parece que você se aventurou em território desconhecido. A página que você está procurando não pode ser encontrada.'
                />
            </Container>
        </>
    );
}
