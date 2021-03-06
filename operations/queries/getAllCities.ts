import { gql } from 'graphql-request'

export const GET_ALL_CITIES = gql`
    query GetAllCities {
        allCities {
            name
            slug
            people
            planet
            profit
            overall
            country
            continent
        }
    }
`

export const GET_ALL_CITIES_LIMITED = gql`
    query GetAllCitiesLimited {
        allCities {
            name
            slug
            overall
            continent
        }
    }
`
