import {nanoid} from 'nanoid'

const trackingId = (trackings, count = 0) => {
    if (count > 5) {
        throw 'to much tracks, please delete one'
    }
    let id = nanoid(11)
    let find = trackings.find(el => el.id === id)
    if (find) {
        count = count + 1
        return trackingId(trackings, count)
    }
    return id
}

const newTracking = (trackings, trackId, tracking) => {
    return {
        ...tracking,
        trackId: trackId,
        id: trackingId(trackings),
        start: Date.now(),
    }
}

export {newTracking}
