import { Container } from './style';
import HeroContent from './HeroContent';
import HeroIllustration from './HeroIllustration';

interface Props {
    title: string;
    lead: string;
    Illustration: React.ReactNode;
    children?: React.ReactNode;
}

export default function Hero({ title, lead, Illustration, children }: Props) {
    return (
        <Container>
            <HeroContent title={title} lead={lead}>
                {children}
            </HeroContent>

            <HeroIllustration Illustration={Illustration} />
        </Container>
    );
}
