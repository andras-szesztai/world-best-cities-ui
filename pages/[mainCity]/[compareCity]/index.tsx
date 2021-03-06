import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import request from 'graphql-request'
import Head from 'next/head'

import { CityMetricsContainer } from 'components/atoms/CityMetricsContainer'
import { CityPageContainer } from 'components/atoms/CityPageContainer'
import { CityDetails } from 'components/templates/CityDetails'
import { GET_ALL_CITIES } from 'operations/queries/getAllCities'
import { BackButton } from 'components/organisms/BackButton'
import { GET_CITY } from 'operations/queries/getCity'
import { API_URL } from 'constants/api'
import { AllCities, City } from 'types/city'

interface Props {
    mainCity: City
    compareCity: City
}

const MainCityPage = ({ mainCity, compareCity }: Props) => (
    <>
        <Head>
            <title>
                {mainCity?.name} compared to {compareCity?.name} - People |
                Planet | Profit
            </title>
        </Head>
        <CityPageContainer>
            {!(mainCity || compareCity) && (
                <span>Sorry, we have no city such city in the database</span>
            )}
            {mainCity && compareCity && (
                <CityMetricsContainer>
                    <CityDetails city={mainCity} />
                    <CityDetails city={compareCity} />
                    <BackButton href={`/${mainCity.slug}`} />
                </CityMetricsContainer>
            )}
        </CityPageContainer>
    </>
)

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await request<{
        allCities: AllCities
    }>(API_URL, GET_ALL_CITIES)
    return {
        paths: data.allCities.map((c, i) => ({
            params: {
                mainCity: c.slug,
                compareCity: data.allCities[i === 0 ? 1 : i - 1].slug,
            },
        })),
        fallback: 'blocking',
    }
}

interface IParams extends ParsedUrlQuery {
    mainCity: string
    compareCity: string
}

export const getStaticProps: GetStaticProps<Props, IParams> = async (
    context
) => {
    const { mainCity, compareCity } = context.params!

    const mainCityData = await request<{
        getCity: Props['mainCity']
    }>({
        url: API_URL,
        document: GET_CITY,
        variables: { slug: mainCity },
    })
    const compareCityData = await request<{
        getCity: Props['compareCity']
    }>({
        url: API_URL,
        document: GET_CITY,
        variables: { slug: compareCity },
    })
    return {
        props: {
            mainCity: mainCityData.getCity,
            compareCity: compareCityData.getCity,
        },
    }
}

export default MainCityPage
