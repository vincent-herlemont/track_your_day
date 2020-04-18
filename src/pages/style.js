import styled from 'styled-components'

const StyledPage = styled.div`
    display: flex;
    flex-flow: column nowrap;

    @media (min-device-width: 800px) {
        flex-direction: column-reverse;
    }
`

const StyledPageTitle = styled.div`
    order: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    height: 4em;
`

export {StyledPageTitle, StyledPage}
