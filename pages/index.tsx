import type { GetStaticProps } from 'next'

import { CountryCard } from 'components/organisms/CountryCard'
import { GET_ALL_CITIES } from 'operations/queries/getAllCities'
import { GetAllCitiesQuery } from 'types/generated/graphql'

import { client } from './_app'

type AllCities = GetAllCitiesQuery['allCities']

interface StaticProps {
    allCities: AllCities
}
interface Props extends StaticProps {}

const Home = ({ allCities }: Props) => {
    return (
        <div>
            {allCities.map((city) => (
                <CountryCard key={city.name} city={city} />
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
    const { data } = await client.query<StaticProps>({
        query: GET_ALL_CITIES,
    })
    return {
        props: { allCities: data.allCities },
    }
}

export default Home
