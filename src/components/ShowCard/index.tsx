import * as React from "react"
import { Show } from "../../types/Show"
import { Card, TimeTag } from "./styles"
import { AREA_COLOURS } from "../../constants"

const ShowCard = (props: Show) => {
    const start12HourString = props.start > 12 ? `${props.start - 12}pm` : `${props.start}am`;
    const finish12HourString = props.finish > 12 ? `${props.finish - 12}pm` : `${props.finish}am`;

    const areaColour = AREA_COLOURS[props.type];

    return (
        <Card to={`/shows/${props.slug}`} $colour={areaColour}>
            <div className="show-card-inner">
                <h2><TimeTag>{start12HourString}-{finish12HourString}</TimeTag> {props.name}</h2>
            </div>
        </Card>
    )
}

export default ShowCard;
