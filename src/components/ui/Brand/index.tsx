// Dependencies
import { FC } from "react";
import { Link } from "react-router-dom";
// Styles
import * as BRAND from "./Brand";

// Types
export interface BrandProps {
	height?: number;
	width?: number;
	variant?: string;
	showText: boolean;
	textSize?: number;
}

const Brand: FC<BrandProps> = ({ showText, height = 20, width = 20, variant, textSize = 1.2 }: BrandProps) => {
	return (
		<BRAND.Container>
			<Link to="/">
				<BRAND.Logo>
					<img src={"/assets/img/svg/hqnrd.svg"} alt={"HQNRD Logo"} />
				</BRAND.Logo>
				{showText && (
					<BRAND.Text textSize={textSize}>
						{variant === "primary" ? <h1>HOTEL QUINTO NIVEL RD</h1> : <h3>Hotel Quinto Nivel RD</h3>}
						<p>Como estar en casa!</p>
					</BRAND.Text>
				)}
			</Link>
		</BRAND.Container>
	);
};

export default Brand;
