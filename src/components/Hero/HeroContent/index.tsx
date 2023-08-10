import { Container, Content, Lead, Title } from './style';

interface Props {
    title: string;
    lead: string;
    children?: React.ReactNode;
}

export default function HeroContent({ title, lead, children }: Props) {
    return (
        <Container>
            <Content>
                <Title>{title}</Title>
                <Lead>{lead}</Lead>
            </Content>
            {children}
        </Container>
    );
}
