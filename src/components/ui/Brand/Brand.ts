import styled from "styled-components";

interface Props {
	textSize: number;
}

export const Container = styled.div`
	max-width: 25rem;
	a {
		color: var(--color);
		text-decoration: none;
		display: flex;
	}
`;

export const Logo = styled.div`
	margin-right: 0.5rem;

	span img {
		object-fit: contain;
	}
`;

export const Text = styled.div`
	h1,
	h3 {
		font-size: ${({ textSize }: Props) => textSize}rem;
		margin: 0.4rem 0 0 0;
		font-weight: var(--fontw800);
		color: var(--accent-0-0);
		text-decoration: none;
		text-transform: uppercase;
	}

	h1 + p,
	h3 + p {
		font-size: 1.2rem;
		margin: 0;
		font-weight: var(--fontw500);
		color: ${({ theme }) => theme.app.color_primary};
	}
`;
