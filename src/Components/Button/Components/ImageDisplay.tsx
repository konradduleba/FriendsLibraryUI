import React from 'react'
import EButtonTypeList from '../Types/EButtonTypeList'
import IImageDisplay from '../Types/IImageDisplay'

const ImageDisplay = ({ type, image, imageDescription }: IImageDisplay) => {
    if (type !== EButtonTypeList.IMAGE_PRIMARY && type !== EButtonTypeList.IMAGE_SECONDARY) {
        return null
    }

    return <img src={image} alt={imageDescription} />
}

export default ImageDisplay