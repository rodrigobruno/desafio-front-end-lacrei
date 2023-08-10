import { IllustrationContainer } from './style';

interface Props {
    Illustration: React.ReactNode;
}

export default function HeroIllustration({ Illustration }: Props) {
    return <IllustrationContainer>{Illustration}</IllustrationContainer>;
}
