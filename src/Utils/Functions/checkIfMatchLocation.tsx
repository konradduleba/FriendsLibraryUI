const checkIfMatchLocation = (incomingPath: string, defaultPath: string) => {
    const regex = '\\b' + defaultPath + '\\b'

    return regex.match(incomingPath)
}

export default checkIfMatchLocation