import React, {useEffect, useState} from 'react'
import {ApolloClient, gql} from 'apollo-boost'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {persistCache} from 'apollo-cache-persist'
import {ApolloProvider} from '@apollo/react-hooks'

export const GET_DIRTY_DATA = gql`
    {
        dirtyData @client {
            tshuss
        }
    }
`

const GraphQl = ({children}) => {
    const [client, setClient] = useState(null)

    const resolvers = {}

    useEffect(() => {
        const fetchPersistCache = async () => {
            const cache = new InMemoryCache()
            await persistCache({
                cache,
                storage: window.localStorage,
            })
            const client = new ApolloClient({
                cache,
                resolvers,
            })
            setClient(client)
        }
        fetchPersistCache()
    }, [])

    if (!client) {
        return <div>Loading ...</div>
    }

    return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default GraphQl
