import Hero from 'components/Hero';
import { Container } from './style';

export default function NotFound() {
    return (
        <Container>
            <Hero
                title='Página não encontrada'
                lead='Oh não! Parece que você se aventurou em território desconhecido. A página que você está procurando não pode ser encontrada.'
            />
        </Container>
    );
}
