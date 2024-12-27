import CountryCard from "./CountryCard";
import countriesData from "../countriesData"

export default function CountriesContainer(){

    const array = countriesData.map((country) => {
        console.log(country)
        return <CountryCard flags={country.flags.svg} population={country.population.toLocaleString('en-IN')} region={country.region} name={country.name.common} capital={country.capital?.[0]} />
    })
    return (
        <div className="countries-container">
            {array}
        </div>
    )
}