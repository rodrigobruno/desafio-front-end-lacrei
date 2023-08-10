import { Container } from './style';
import HeroContent from './HeroContent';
import HeroIllustration from './HeroIllustration';

interface Props {
    title: string;
    lead: string;
    Illustration?: React.ReactNode;
    $quote?: boolean;
    children?: React.ReactNode;
}

export default function Hero({
    title,
    lead,
    Illustration,
    $quote = false,
    children,
}: Props) {
    return (
        <Container>
            <HeroContent title={title} lead={lead} $quote={$quote}>
                {children}
            </HeroContent>

            {Illustration && <HeroIllustration Illustration={Illustration} />}
        </Container>
    );
}
