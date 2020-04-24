import React, {useEffect, useState} from 'react'
import StyledColorPicker from './style'
import {GithubPicker} from 'react-color'

const ColorPicker = ({value, onChange}) => {
    onChange = !onChange ? () => {} : onChange
    value = !value ? '#ffffff' : value
    const [color, setColor] = useState(value)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        onChange(color)
    }, [color])

    const handleChangeColor = color => {
        setColor(color.hex)
    }

    const handleToggleOpen = bool => {
        return () => {
            setOpen(bool)
        }
    }

    return (
        <StyledColorPicker
            onMouseEnter={handleToggleOpen(true)}
            onMouseLeave={handleToggleOpen(false)}>
            <div
                onClick={handleToggleOpen}
                className="color"
                style={{backgroundColor: color}}
            />
            {open && (
                <GithubPicker class="picker" onChange={handleChangeColor} />
            )}
        </StyledColorPicker>
    )
}

export default ColorPicker
