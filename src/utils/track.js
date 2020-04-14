import {nanoid} from 'nanoid'

const trackId = (tracks, count = 0) => {
    if (count > 5) {
        throw 'to much tracks, please delete one'
    }
    let id = nanoid(3)
    let find = tracks.find(el => el.id === id)
    if (find) {
        count = count + 1
        return trackId(tracks, count)
    }
    return id
}

const newTrack = (tracks, track) => {
    return {
        ...track,
        id: trackId(tracks),
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
