import styled from 'styled-components'

const StyledTracking = styled.div`
    display: flex;
    padding: 1.4em;

    .content {
        display: flex;
        flex-flow: column nowrap;
        margin-right: auto;
    }

    .title {
        font-size: 0.5em;
        text-transform: uppercase;
        margin-left: 0.5em;
    }

    .description {
        padding: 0.5em 0.5em 0.5em 0;
        overflow: fragments;
    }

    .dot {
        height: 50px;
    }
`

export default StyledTracking
