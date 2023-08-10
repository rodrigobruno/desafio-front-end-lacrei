import { Wrapper } from './style';

interface Props {
    children: React.ReactNode;
}

export default function Container({ children }: Props) {
    return <Wrapper>{children}</Wrapper>;
}
