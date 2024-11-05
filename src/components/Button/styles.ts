import styled from 'styled-components';


export const ButtonContainer = styled.button<{ disabled: boolean }>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    
    cursor: ${({ disabled }) => (disabled ? 'pointer' : 'default')};

    &:hover {
        ${({ disabled }) =>
            disabled &&
            `
            opacity: 0.6;
            cursor: pointer;
        `}
    }
    }
        
`;