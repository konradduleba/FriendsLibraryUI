const moveToTopSmoothly = () => {
    return window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: 0
    })
}

export default moveToTopSmoothly