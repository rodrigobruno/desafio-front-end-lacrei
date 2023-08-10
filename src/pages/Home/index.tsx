import { CallToAction } from './style';
import Hero from 'components/Hero';
import IllustrationDoctor from 'components/IllustrationDoctor';
import LinkButton from 'components/LinkButton';
// import { ReactComponent as illustrationDoctor } from 'assets/illustrationDoctor.svg';

export default function Home() {
    return (
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
    );
}
