import { Anchor } from './style';
import { ReactComponent as Facebook } from 'assets/social/FacebookLogo.svg';
import { ReactComponent as Instagram } from 'assets/social/InstagramLogo.svg';
import { ReactComponent as Linkedin } from 'assets/social/LinkedinLogo.svg';
import { ReactComponent as Default } from 'assets/social/DefaultLogo.svg';

interface Props {
    label: string;
    to: string;
}

export default function SocialMediaItem({ label, to }: Props) {
    const socialMediaIcon = (socialMedia: string) => {
        switch (socialMedia.toLowerCase()) {
            case 'facebook':
                return <Facebook aria-hidden='true' />;
            case 'instagram':
                return <Instagram aria-hidden='true' />;
            case 'linkedin':
                return <Linkedin aria-hidden='true' />;
            default:
                return <Default aria-hidden='true' />;
        }
    };

    return (
        <Anchor href={to} aria-label={label} target='blank' rel='noopener'>
            {socialMediaIcon(label)}
        </Anchor>
    );
}
