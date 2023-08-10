import { MainContent } from './style';
import Container from 'components/Container';

interface Props {
    children: React.ReactNode;
}

export default function Main({ children }: Props) {
    return (
        <main>
            <Container>
                <MainContent>{children}</MainContent>
            </Container>
        </main>
    );
}
