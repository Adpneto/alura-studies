export function timeSec(time: string) {
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(":")

    const hoursSec = Number(hours) * 3600
    const minutesSec = Number(minutes) * 60
    return hoursSec + minutesSec + Number(seconds)
}