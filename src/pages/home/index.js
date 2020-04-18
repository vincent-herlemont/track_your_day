import React from 'react'
import useWorkspace from '../../utils/hooks/useWorkspace'
import Nav from '../../components/nav'
import {StyledHome} from './style'
import {StyledPageTitle} from '../style'
import Tracking from '../../components/tracking'

const Home = () => {
    let workspace = useWorkspace()
    return (
        <StyledHome>
            <StyledPageTitle>{workspace.name}</StyledPageTitle>
            <div>
                <div>
                    {workspace.trackings.map(el => {
                        let track = workspace.tracks.find(
                            track => track.id === el.trackId
                        )
                        return (
                            <Tracking key={el.id} track={track} tracking={el} />
                        )
                    })}
                </div>
            </div>
            <Nav
                links={[
                    {to: '/workspaces', title: 'workspaces'},
                    {
                        to: '/workspaces/' + workspace.id + '/w/tracks',
                        title: 'add track',
                    },
                    {
                        to: '/workspaces/' + workspace.id + '/w/explore',
                        title: 'explore',
                    },
                ]}
            />
        </StyledHome>
    )
}

export default Home
