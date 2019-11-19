import styled,{keyframes} from 'styled-components';

const rotate = keyframes`
	   to {
          transform: rotate(360deg);
	   }
    `
export default styled.button`
        animation: ${rotate} 5s linear infinite;
        display: inline-block;
		border-radius: 50px;
		padding: 1em 0;
		margin: 1em;
		width: 20em;
        background-color: ${props => props.theme.mode === 'dark' ? '#000' : '#FFF'};
        border: 2px solid ${props => props.theme.mode === 'dark' ? '#FFF' : '#000'};
        color: ${props => props.theme.mode === 'dark' ? '#FFF' : '#000'};
    `
