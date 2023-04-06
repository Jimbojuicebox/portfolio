import styled from "styled-components";


export const ContactForm = styled.form`
    display: ${({ display }) => display};
    width: 40%;
    z-index: 10;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
        width: 75%;
        margin: auto;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        width: 90%;
        margin: auto;
    };
`

export const FormLabel = styled.p`
    color: ${({ theme }) => theme.colors.para_text_color};
    padding-bottom: 10px;
`

export const FormInput = styled.input`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary_light};
    border: 1px solid ${({ theme }) => theme.colors.para_text_color};
    color: ${({ theme }) => theme.colors.para_text_color};
    border-radius: 5px;
    padding: 15px;

    &::placeholder {
        color: ${({ theme }) => theme.colors.para_text_color};
    }
`

export const Confirmation = styled.div`
    display: ${({ display }) => display};
    padding-bottom: 1rem;
    color: ${({ theme }) => theme.colors.para_text_color};
`

export const SendMe = styled.input`
    display: ${({ display }) => display};
    width: max-content;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.primary_light};
        background-color: ${({ theme }) => theme.colors.white};
    };

    &:active {
        transform: scale(0.9, 0.9);
    };
`