import styled from 'styled-components';
import { border, color, space, variant } from 'styled-system';
import { colors } from './colors';

export const Container = styled('div')(
	space,
	border,
	color,
	variant({
		variants: {
			center: {
				display: 'flex',
				justifyContent: 'center',
				alingItems: 'center',
				width: 'auto',
			},
		},
	})
);
export const LoginButton = styled('button')(
	space,
	variant({
		variants: {
			primary: {
				position: 'relative',
				display: 'flex',
				width: '108px',
				height: '40px',
				alingItems: 'flex-start',
				flowDirection: 'row',
				background: 'transparent',
				border: `solid 1px ${colors.background.one}`,
				borderRadius: '8px',
				gap: '8px',
				padding: '8px 16px',
				'&:hover': {
					border: `solid 1px ${colors.primary.two}`,
					color: colors.primary.two,
				},
			},
		},
	})
);

export const Title = styled('h1')(
	color,
	space,
	variant({
		variants: {
			one: {
				fontSize: '72px',
				lineHeight: '72px',
			},
			two: {
				fontSize: '60px',
				lineHeight: '72px',
			},
			three: {
				fontSize: '48px',
				lineHeight: '40px',
			},
			four: {
				fontSize: '34px',
				lineHeight: '40px',
			},
			five: {
				fontSize: '24px',
				lineHeight: '32px',
			},
			six: {
				fontSize: '20px',
				lineHeight: '28px',
			},
		},
	})
);

export const Subtitle = styled('h3')(
	color,
	space,
	border,
	variant({
		variants: {
			one: {
				fontSize: '18px',
				lineHeight: '26px',
			},
			two: {
				fontSize: '16px',
				lineHeight: '24px',
			},
		},
	})
);

export const Text = styled('p')(
	color,
	space,
	variant({
		variants: {
			one: {
				fontSize: '16px',
				lineHeight: '24px',
			},
			two: {
				fontSize: '14px',
				lineHeight: '22px',
			},
			three: {
				fontSize: '12px',
				lineHeight: '18px',
			},
		},
	})
);

export const TextLink = styled('a')(
	color,
	space,
	variant({
		variants: {
			one: {
				fontSize: '16px',
				lineHeight: '24px',
				color: colors.primary.two,
			},
			two: {
				fontSize: '14px',
				lineHeight: '22px',
				color: colors.primary.two,
			},
			three: {
				fontSize: '12px',
				lineHeight: '18px',
				color: colors.primary.two,
			},
		},
	})
);

export const ButtonText = styled('p')(
	color,
	space,
	variant({
		variants: {
			one: {
				fontSize: '18px',
				lineHeight: '26px',
			},
			two: {
				fontSize: '14px',
				lineHeight: '22px',
			},
		},
	})
);
