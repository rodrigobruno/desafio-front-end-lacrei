import Hero from 'components/Hero';
import IllustrationPeople from './IllustrationPeople';
import { Container } from './style';
import { Helmet } from 'react-helmet-async';

export default function PessoaUsuaria() {
    return (
        <>
            <Helmet>
                <title>Pessoa Usuária - Lacrei</title>
                <meta
                    name='description'
                    content='A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.'
                />
            </Helmet>

            <Container>
                <Hero
                    title='Pessoa Usuária'
                    lead='A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.'
                    Illustration={<IllustrationPeople />}
                    $quote
                />
            </Container>
        </>
    );
}
