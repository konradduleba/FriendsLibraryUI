import { EParseDateMethods } from "Utils/Types/EParseDateMethods";

const checkNumberValue = (number: number) => number < 10 ? `0${number}` : number

const parseDateToSelectedFormat = (date: Date, format: EParseDateMethods): string => {
    const newDate = new Date(date)

    const hours = checkNumberValue(newDate.getHours())
    const minutes = checkNumberValue(newDate.getMinutes())

    if (format === EParseDateMethods.HHMM) {
        return `${hours}:${minutes}`
    }

    return ''
}

export default parseDateToSelectedFormat