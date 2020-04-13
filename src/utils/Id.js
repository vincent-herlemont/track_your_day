import {nanoid} from 'nanoid'

export let TrackId = (tracks, count = 0) => {
    if (count > 5) {
        throw 'to much tracks, please delete one'
    }
    let id = nanoid(3)
    let find = tracks.find(el => el.id === id)
    if (find) {
        count = count + 1
        return TrackId(tracks, count)
    }
    return id
}