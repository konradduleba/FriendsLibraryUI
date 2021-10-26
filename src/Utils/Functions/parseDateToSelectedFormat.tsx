import { EParseDateMethods } from "Utils/Types/EParseDateMethods";

const checkNumberValue = (number: number) => number < 10 ? `0${number}` : number

const parseDateToSelectedFormat = (date: Date, format: EParseDateMethods): string => {
    const newDate = new Date(date)

    const hours = checkNumberValue(newDate.getHours())
    const minutes = checkNumberValue(newDate.getMinutes())

    const year = newDate.getFullYear()
    const month = checkNumberValue(newDate.getMonth() + 1)
    const day = checkNumberValue(newDate.getDate())

    const formatter = new Intl.DateTimeFormat('en-us', { month: 'short' })

    const monthName = formatter.format(newDate)

    if (format === EParseDateMethods.HHMM) {
        return `${hours}:${minutes}`
    }
    else if (format === EParseDateMethods.DDMMMYYYY_HHMM) {
        return `${day} ${monthName} ${year} ${hours}:${minutes}`
    }
    else if (format === EParseDateMethods.DDMMMYYY) {
        return `${day} ${monthName} ${year}`
    }
    else if (format === EParseDateMethods.YYYY_MM_DD) {
        return `${year}-${month}-${day}`
    }

    return ''
}

export default parseDateToSelectedFormat