import React, { useState, useEffect, useRef } from 'react'
import './ImageDragAndDrop.scss'
import avatarPlaceholder from 'Assets/Images/user-default-picture.png'


const MAX_FILE_SIZE = 1048576

interface IImageDragAndDrop {
    componentId: string;
    currentFile: string;
    uploadedFile: File | null;
    setUploadedFile: (file: File) => void;
}


const ImageDragAndDrop = ({ componentId, currentFile, uploadedFile, setUploadedFile }: IImageDragAndDrop) => {
    const [dragActive, setDragActive] = useState(false)
    const [fileUploadWarning, setFileUploadWarning] = useState<string | null>(null)
    const dropRef = useRef<HTMLDivElement | null>(null)
    let dragCounter = 0

    const handleDrag = (e: MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDragIn = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        dragCounter++
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDragActive(true)
        }
    }

    const handleDragOut = (e: MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        dragCounter--
        if (dragCounter === 0) {
            setDragActive(false)
        }
    }

    const handleDrop = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleUpload(e.dataTransfer.files)
            e.dataTransfer.clearData()
            dragCounter = 0
        }
    }

    const handleUpload = (files: FileList | null) => {
        if (!files) {
            return null
        }

        if (files[0] && files[0].name) {
            if (files[0].size > MAX_FILE_SIZE) { // validate image size
                setFileUploadWarning('File too big. Max file size is 1 MB.')
            }
            else if (files[0].type !== 'image/jpeg' && files[0].type !== 'image/jpg' && files[0].type !== 'image/png') { // validate image type
                setFileUploadWarning('Incorrect file format. Allowed formats: PNG, JPG.')
            }
            else {
                const imageToUpload = files[0]
                setUploadedFile(imageToUpload)
                setFileUploadWarning(null)
            }
        }
    }

    useEffect(() => {
        dropRef.current?.addEventListener('dragenter', handleDragIn)
        dropRef.current?.addEventListener('dragleave', handleDragOut)
        dropRef.current?.addEventListener('dragover', handleDrag)
        dropRef.current?.addEventListener('drop', handleDrop)
        return () => {
            if (dropRef && dropRef.current) {
                dropRef.current.removeEventListener('dragenter', handleDragIn)
                dropRef.current.removeEventListener('dragleave', handleDragOut)
                dropRef.current.removeEventListener('dragover', handleDrag)
                dropRef.current.removeEventListener('drop', handleDrop)
            }
        }
    }, [])

    const getImageSrc = () => {
        return window.URL.createObjectURL(uploadedFile)
    }

    return (
        <div className="image-drag-and-drop">
            <div className="drag-and-drop-input" ref={dropRef}>
                {dragActive && <div className="drop-active-overlay">Drop an image here</div>}
                <div>Profile photo</div>
                {!uploadedFile && !currentFile && <img src={avatarPlaceholder} alt="placeholder" />}
                {!uploadedFile && currentFile && <img src={currentFile} className="file-preview" alt="avatar" />}
                {uploadedFile && <img src={getImageSrc()} className="file-preview" alt="uploaded avatar" />}
                <span className="browse-button">
                    <input type="file" name={componentId} id={componentId} className="inputfile" accept="image/png, image/jpg, image/jpeg" onChange={e => handleUpload(e.target.files)} />
                    <label htmlFor={componentId}>Drag image or click here</label>
                </span>
            </div>
            {fileUploadWarning && <div className="input-error">{fileUploadWarning}</div>}
        </div>
    )
}

export default ImageDragAndDrop