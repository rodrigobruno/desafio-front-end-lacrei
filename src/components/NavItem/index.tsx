import { Item } from './style';

interface Props {
    to: string;
    children: string;
    actived?: 'green' | 'gray';
}

export default function NavItem({ to, children, actived = 'gray' }: Props) {
    return (
        <Item to={to} actived={actived}>
            {children}
        </Item>
    );
}
