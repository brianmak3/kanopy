import React from 'react'
import './home.css'
import {
    useQuery
} from 'react-query'
import { fetchPokemonDetails } from '../../common/helper'
import { useLocation } from 'react-router-dom'
const Details = () => {
    const { state } = useLocation(),
        { data, status } = useQuery('pokemonDetails', () => fetchPokemonDetails(state.url))
    return (
        <div className={'main'} >
            <div className='header'>
                <h2>Pokemon</h2>
            </div>
            {
                status === 'loading' ?
                    <div className='loadingDiv'>Loading...</div> :
                    <ul>

                        {
                            Object.keys(data).map((key: string, n: number) => (
                                <div key={n} className={'item'}>
                                    <h5>{key}</h5>
                                    {
                                        ['abilities', 'forms', 'game_indices', 'moves', 'stats', 'stat', 'types'].includes(key) ?
                                            data[key].map(({ ability, name, url, version, move, stat, type }: any, i: number) => (
                                                <li key={i}>
                                                    <a
                                                        href={url || ability?.url || version?.url || move?.url || stat?.url || type?.url}
                                                    >{name || ability?.name || version?.name || move?.name || stat?.name || type?.name}</a>
                                                </li>
                                            )) :
                                            key === 'location_area_encounters'?
                                            <a href={data[key]}>Link</a>:
                                            <div>
                                                {JSON.stringify(data[key])}
                                            </div>
                                    }
                                </div>
                            ))
                        }
                    </ul>
            }
        </div>
    )
}

export default Details