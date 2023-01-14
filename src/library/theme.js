import styled from 'styled-components';
import { variant } from 'styled-system';
import { colors } from './colors';

export const LoginButton = styled('button')(
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
				},
				'*:hover ~ p': {
					color: colors.primary.two,
				},
			},
			active: {},
		},
	})
);

export const Title = styled('h1')(
	{
		color: colors.grey.one,
	},
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
	{
		color: colors.grey.one,
		fontFamily: 'Roboto',
	},
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
	{
		color: colors.grey.one,
		fontFamily: 'Roboto',
	},
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

export const ButtonText = styled('p')(
	{
		color: colors.grey.one,
		fontFamily: 'Roboto',
	},
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

export const GoogleIcon = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M19.9075 21.0961C22.7427 18.4499 24.0028 14.0395 23.2468 9.81808H11.9688V14.4805H18.3953C18.1433 15.9926 17.2612 17.2527 16.0011 18.0718L19.9075 21.0961Z'
				fill='#4285F4'
			/>
			<path
				d='M1.25781 17.3787C2.08665 19.0115 3.27532 20.4347 4.73421 21.5413C6.19309 22.6478 7.88414 23.4087 9.67986 23.7666C11.4756 24.1245 13.3291 24.0702 15.1008 23.6076C16.8724 23.145 18.516 22.2862 19.9075 21.0961L16.0011 18.0718C12.6618 20.277 7.11733 19.4579 5.22717 14.2915L1.25781 17.3787Z'
				fill='#34A853'
			/>
			<path
				d='M5.227 14.2915C4.72296 12.7163 4.72296 11.2672 5.227 9.69207L1.25765 6.6048C-0.191478 9.50306 -0.632517 13.5984 1.25765 17.3788L5.227 14.2915Z'
				fill='#FBBC02'
			/>
			<path
				d='M5.22717 9.69207C6.61329 5.34468 12.5358 2.82446 16.5052 6.54179L19.9705 3.13949C15.056 -1.58593 5.47919 -1.39692 1.25781 6.6048L5.22717 9.69207Z'
				fill='#EA4335'
			/>
		</svg>
	);
};
