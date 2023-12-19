import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    > input {
        width: 316px;
        height: 48px;
        padding: 12px 14px;
        border-radius: 8px;
        border: 0px;

        background-color: ${({ theme }) =>theme.DARK.D_900};

        &::placeholder {
         color: ${({ theme }) => theme.LIGHT.L_400};
        }
    }

    > label {
        color: ${({ theme}) => theme.LIGHT.L_400};
    }
`;