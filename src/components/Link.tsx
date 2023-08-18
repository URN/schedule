import { Link as GatsbyLink } from "gatsby";
import styled, { css } from "styled-components";
import { LINK_PRIMARY } from "../constants";

const commonStyles = css`
    color: ${LINK_PRIMARY};
    text-decoration: none;
    border-bottom: 2px dotted ${LINK_PRIMARY};
`

export const Link = styled(GatsbyLink)`
    ${commonStyles}
`;

export const ExternalLink = styled.a`
    ${commonStyles}
`;

