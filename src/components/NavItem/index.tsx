import { Item } from './style';

interface Props {
    to: string;
    children: string;
    $activedColor?: 'green' | 'black';
}

export default function NavItem({
    to,
    children,
    $activedColor = 'black',
}: Props) {
    return (
        <Item to={to} $activedColor={$activedColor}>
            {children}
        </Item>
    );
}
