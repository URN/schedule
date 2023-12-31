import * as React from "react";
import { graphql } from "gatsby"
import Page, { createHead } from "../../layouts/page"
import { Show } from "../../types/Show";
import { getAreaFriendlyName } from "../../utils";
import { Link } from "../../components/Link";
import { AREA_COLOURS } from "../../constants";

const capitalise = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default function Template({
    data,
}: { data: { show: Show } }) {
    const show = data.show;

    const start12HourString = show.start > 12 ? `${show.start - 12}pm` : `${show.start}am`;
    const finish12HourString = show.finish > 12 ? `${show.finish - 12}pm` : `${show.finish}am`;

    return (
        <Page title={show.name} description={`${getAreaFriendlyName(show.type)} on URN`}>
            <p>Catch <strong>{show.name}</strong> on URN every {capitalise(show.parent.day)} from {start12HourString} to {finish12HourString}</p>

            <p>Check out all our shows <Link to="/">here!</Link></p>
        </Page >
    )
}

export const Head = ({ data }: { data: { show: Show } }) => {
    return createHead({ title: data.show.name, description: `${getAreaFriendlyName(data.show.type)} on URN`, colour: AREA_COLOURS[data.show.type] })
}

export const pageQuery = graphql`
query showPage($id: String) {
    show (id: { eq: $id }) {
        name
        start
        finish
        id
        type
        parent {
            ... on File {
                day: name
            }
        }
    }
  }
`
