import React from 'react'
import './home.css'
import {
    useQuery
} from 'react-query'
import { fetchPokemons } from '../../common/helper'
import { Link } from 'react-router-dom'
const Index = () => {
    const { data, status } = useQuery('pokemons', fetchPokemons)
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
                            data.results.map(({ name, url }: any) => (
                                <li key={name}>
                                    <Link
                                        to={'/details'}
                                        state={{
                                            url
                                        }}
                                    >{name}</Link>
                                </li>
                            ))
                        }
                    </ul>
            }
        </div>
    )
}

export default Index