const getPuzzle = async (wordCount) => {
    const response =  await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('unable to fetch the data')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.com/v3.1/all', {})
    if (response.status === 200) {
        const countries = await response.json()
        return countries.find(country => country.cca2 === countryCode)
    } else {
        throw new Error('unable to fetch the country data')
    }
}

const getLocation = async () => {
    const response = await fetch ('//ipinfo.io/json?token=48d1a33b27d208', {})
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('unable to fetch the IP data')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

export { getPuzzle as default }

// getCurrentCountry().then(country => {
//     console.log(country.name.official);
// }).catch(error => {
//     console.log(error);
// })