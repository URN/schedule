import styled from "styled-components";
import { Props } from ".";

export const Card = styled.div<Props> `
    background: ${(props) => props.colour}aa;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
    transition: all 0.2s ease-in-out;

    @media (max-width: 750px) {
        text-align: center;
    }

    &:hover {
        transform: scale(1.01);
        background: ${(props) => props.colour}dd;
    }

`; export const TimeTag = styled.span`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 5px;
    margin-right: 10px;

    @media (max-width: 750px) {
        margin-bottom: 15px;
        display: block;
    }
`;

Card.defaultProps = {
    colour: "#2e343f"
}

