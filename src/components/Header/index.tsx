import { Brand, HeaderContainer, HeaderContent, Nav } from './style';
import NavItem from 'components/NavItem';
import Container from 'components/Container';
import menu from '../../data/menu.json';

export default function Header() {
    return (
        <HeaderContainer>
            <Container>
                <HeaderContent>
                    <Brand to='/'>Lacrei</Brand>
                    <Nav>
                        {menu.map((item) => (
                            <NavItem
                                key={item.id}
                                to={item.to}
                                $activedColor='green'
                            >
                                {item.label}
                            </NavItem>
                        ))}
                    </Nav>
                </HeaderContent>
            </Container>
        </HeaderContainer>
    );
}
