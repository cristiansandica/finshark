import { CompanySearch } from "../../company";
import "./Card.css";

interface Props {
    id: string;
    searchResult: CompanySearch;
}

const Card: React.FC<Props> = ({id, searchResult}: Props): JSX.Element => {
  return (
    <div
     className='card'
     id={id}
     key={id}
     >
        <img src="https://images.unsplash.com/photo-1612428978260-2b9c7df2015" alt="company logo" />
        <div className='details'>
            <h2>{searchResult.name} ({searchResult.symbol})</h2>
            <p>{searchResult.currency}</p>
        </div>
        <p className='info'>{searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
    </div>
  )
}

export default Card