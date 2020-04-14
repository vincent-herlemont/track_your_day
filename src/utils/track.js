import {TrackId} from './Id'

const newTrack = (tracks, track) => {
    return {
        ...track,
        id: TrackId(tracks),
    }
}

const defaultTracks = () => {
    let tracks = []
    tracks.push(newTrack(tracks, {title: 'Work'}))
    tracks.push(newTrack(tracks, {title: 'Learn'}))
    tracks.push(newTrack(tracks, {title: 'Free time'}))
    return tracks
}

export {newTrack, defaultTracks}
