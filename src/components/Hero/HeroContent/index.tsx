import { Container, Content, Lead, Title } from './style';

interface Props {
    title: string;
    lead: string;
    $quote?: boolean;
    children?: React.ReactNode;
}

export default function HeroContent({
    title,
    lead,
    $quote = false,
    children,
}: Props) {
    return (
        <Container $quote>
            <Content>
                <Title>{title}</Title>
                <Lead $quote={$quote}>{lead}</Lead>
            </Content>
            {children}
        </Container>
    );
}
