import {
    Credit,
    FooterContainer,
    FooterContent,
    Nav,
    SocialMedia,
} from './style';
import Container from 'components/Container';
import NavItem from 'components/NavItem';
import menu from 'data/menu.json';
import social from 'data/social.json';
import SocialMediaItem from './SocialMediaItem';

export default function Footer() {
    return (
        <FooterContainer>
            <Container>
                <FooterContent>
                    <Nav>
                        {menu.map((item) => (
                            <NavItem key={item.id} to={item.to}>
                                {item.label}
                            </NavItem>
                        ))}
                    </Nav>
                    <SocialMedia>
                        {social.map((item) => (
                            <SocialMediaItem
                                key={item.id}
                                label={item.label}
                                to={item.to}
                            />
                        ))}
                    </SocialMedia>
                    <Credit>Desafio Front-end Lacrei</Credit>
                </FooterContent>
            </Container>
        </FooterContainer>
    );
}
