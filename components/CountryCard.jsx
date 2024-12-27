
export default function CountryCard(props) {
    const {flags,name,population,region,capital} = props
    return (
        <a className="country-card" href={`/country.html?name=${name}`}>
            <img src={flags} alt="Barbados flag" />
            <div className="card-text">
                <h3 className="card-title">{name}</h3>
                <p><b>Population: </b>{population}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Capital: </b>{capital}</p>
            </div>
        </a>
    )
}