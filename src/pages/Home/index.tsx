import { CallToAction, Container } from './style';
import Hero from 'components/Hero';
import IllustrationDoctor from 'pages/Home/IllustrationDoctor';
import LinkButton from 'components/LinkButton';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home - Lacrei</title>
                <meta
                    name='description'
                    content='Boas vindas a Lacrei Saúde. Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+'
                />
            </Helmet>

            <Container>
                <Hero
                    title='Boas vindas a Lacrei Saúde'
                    lead='Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+'
                    Illustration={<IllustrationDoctor />}
                >
                    <CallToAction>
                        <LinkButton to='/pessoa-usuaria'>
                            Pessoa Usuária
                        </LinkButton>
                        <LinkButton to='/profissional' variant='outlined'>
                            Profissional
                        </LinkButton>
                    </CallToAction>
                </Hero>
            </Container>
        </>
    );
}
