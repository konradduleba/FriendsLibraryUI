import ESearchTypes from "Utils/Types/ESearchTypes"

const checkInitialType = (type?: ESearchTypes) => {
    if (type === ESearchTypes.GROUP || type === ESearchTypes.EVENT || type === ESearchTypes.USER) {
        return type
    }

    return ESearchTypes.USER
}

export default checkInitialType