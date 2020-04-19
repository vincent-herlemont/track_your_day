import styled from 'styled-components'

const StyledTrack = styled.div`
    display: flex;
    flex-flow: row nowrap;

    .title {
        display: flex;
        width: 100%;
    }

    .title .content {
        //margin-right: auto;
        flex: 3 1;
    }

    .title .action {
        //margin-right: auto;
        flex: 1 1;
    }
`

export default StyledTrack
