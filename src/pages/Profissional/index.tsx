import Hero from 'components/Hero';
import IllustrationHospital from './IllustrationHospital';
import { Container } from './style';
import { Helmet } from 'react-helmet-async';

export default function Profissional() {
    return (
        <>
            <Helmet>
                <title>Profissional - Lacrei</title>
                <meta
                    name='description'
                    content='Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+.'
                />
            </Helmet>

            <Container>
                <Hero
                    title='Profissional'
                    lead='Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+'
                    Illustration={<IllustrationHospital />}
                    $quote
                />
            </Container>
        </>
    );
}
