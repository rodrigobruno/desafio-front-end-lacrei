import { CallToAction, Container } from './style';
import Hero from 'components/Hero';
import IllustrationDoctor from 'pages/Home/IllustrationDoctor';
import LinkButton from 'components/LinkButton';

export default function Home() {
    return (
        <Container>
            <Hero
                title='Boas vindas a Lacrei Saúde'
                lead='Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+'
                Illustration={<IllustrationDoctor />}
            >
                <CallToAction>
                    <LinkButton to='/pessoa-usuaria'>Pessoa Usuária</LinkButton>
                    <LinkButton to='/profissional' variant='outlined'>
                        Profissional
                    </LinkButton>
                </CallToAction>
            </Hero>
        </Container>
    );
}
