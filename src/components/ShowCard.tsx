import * as React from "react"
import styled from "styled-components"

const AREA_COLOURS = {
    "daytime": "#c60047",
    "after-dark": "#2e343f",
    "news": "#007a76",
    "sport": "#008ac4",
    "culture": "#ea4b2a",
}

export interface Show {
    name: string
    start: number
    finish: number
    id: string
    type: "daytime" | "after-dark" | "news" | "sport" | "culture"
    parent: {
        day: string
    }
}

interface Props {
    colour: string
}

const Card = styled.div<Props>`
    background: ${(props) => props.colour}aa;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
`;

Card.defaultProps = {
    colour: "#2e343f"
};

const TimeTag = styled.span`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    padding: 5px;
    margin-right: 10px;
`;

const ShowCard = (props: Show) => {
    const start12HourString = props.start > 12 ? `${props.start - 12}pm` : `${props.start}am`;
    const finish12HourString = props.finish > 12 ? `${props.finish - 12}pm` : `${props.finish}am`;

    const areaColour = AREA_COLOURS[props.type];

    return (
        <Card colour={areaColour}>
            <h2><TimeTag>{start12HourString}-{finish12HourString}</TimeTag> {props.name}</h2>
        </Card>
    )
}

export default ShowCard;
