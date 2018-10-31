import styled from 'styled-components';
import sm from 'styled-map';

const background = sm`
    default: gray;
    isPrimary: green;
    isSecondary: red;
`;

const fontSizePreset = sm`
    default: 10px;
    isLarge: 14px;
    isSmall: 8px;
`;

const ButtonStyle = styled.div`
	font-family: sans-serif;
	display: inline-block;
	padding: 5px 10px;
	border: none;
	background: ${background};
	font-size: ${({ fontSize, ...props }) => (fontSize ? `${fontSize}px` : fontSizePreset(props))};
	color: white;
`;

export default ButtonStyle;
