import styled from 'styled-components'

const StyledHome = styled.div`
    display: flex;
    flex-flow: column nowrap;
    @media (min-device-width: 800px) {
        flex-direction: column-reverse;
    }
`

export default StyledHome
