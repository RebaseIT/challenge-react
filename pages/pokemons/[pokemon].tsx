import {useState, useEffect} from 'react'
import { Skeleton, Card, Link, List, ListItem } from '@mui/material';
import {capitalize} from 'lodash'
import { fetcher } from '../../services/pokemon'
import { useParams } from 'next/navigation';
export default function Pokemon() {
    const [pokemon, setPokemon] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    useEffect(() => {
        try {
            setIsLoading(true)
            if(!params?.pokemon){
                return
            }
            fetcher.getPokemonSpecificMove(params.pokemon).then(pokemon2set => {
              setPokemon(pokemon2set)
            }).finally(() =>{
              setIsLoading(false)
            })
        } catch (err) {
            console.error(err)
        }
    }, [params])
  return (
    isLoading || !pokemon ? 
        <>
            <Skeleton variant="rectangular" width={500} height={96} style={{marginBottom: '12px'}}/>
            <Skeleton variant="rectangular" width="100%" height={400} />
        </>
        : 
        <>
        <span style={{fontSize:40, marginBottom: '12px'}}>
                {capitalize(pokemon?.name)}
        </span>
            <Card style={{padding: '12px',minHeight: '100%'}}>
                Type: {capitalize(pokemon.types.map(({type})=>type.name)?.join(', '))}.
                <div style={{marginTop: '8px'}}>
                  Effects:
                  <List>
                  {pokemon?.stats.map((stat: any) => {
                      return (
                      <ListItem key={stat.stat.name}>
                        {stat.stat.name}:{stat.base_stat}
                      </ListItem>)
                  })}
                  </List>
                </div>
                <div style={{marginTop: '8px'}}>
                  Weight: {pokemon?.weight}
                </div>
                <div style={{marginTop: '8px'}}>
                  Moves: 
                  <List>
                  {pokemon?.moves.map(({move}: any) => {
                      return (
                      <ListItem key={move.name}>
                        <Link href={`/moves/${move.name}`}>{move.name}</Link>
                      </ListItem>)
                  })}
                  </List>
                </div>
            </Card>
        </>
  );
}
