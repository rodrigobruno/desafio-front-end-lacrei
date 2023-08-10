import Hero from 'components/Hero';
import IllustrationHospital from './IllustrationHospital';
import { Container } from './style';

export default function Profissional() {
    return (
        <Container>
            <Hero
                title='Profissional'
                lead='Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+'
                Illustration={<IllustrationHospital />}
                $quote
            />
        </Container>
    );
}
