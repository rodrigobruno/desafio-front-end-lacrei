import { StyledLink } from './style';

interface Props {
    to: string;
    children: React.ReactNode;
    variant?: 'primary' | 'outlined';
}

export default function LinkButton({
    to,
    children,
    variant = 'primary',
}: Props) {
    return (
        <StyledLink to={to} variant={variant}>
            {children}
        </StyledLink>
    );
}
