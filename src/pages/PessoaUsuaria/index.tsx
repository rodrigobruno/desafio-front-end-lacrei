import Hero from 'components/Hero';
import IllustrationPeople from './IllustrationPeople';
import { Container } from './style';

export default function PessoaUsuaria() {
    return (
        <Container>
            <Hero
                title='Pessoa Usuária'
                lead='A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.'
                Illustration={<IllustrationPeople />}
                $quote
            />
        </Container>
    );
}
