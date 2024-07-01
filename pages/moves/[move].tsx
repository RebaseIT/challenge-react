import {useState, useEffect} from 'react'
import { Skeleton, Card, Link, List, ListItem } from '@mui/material';
import {capitalize} from 'lodash'
import { fetcher } from '../../services/PokemonMovesDataFetcher'
import { useParams } from 'next/navigation';
export default function Move() {
    const [move, setMove] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams<{move: string}>()
    useEffect(() => {
        try {
            setIsLoading(true)
            if(!params?.move){
              return
            }
            fetcher.getPokemonSpecificMove(params?.move).then(move2read => {
              setMove(move2read)
            }).finally(() =>{
              setIsLoading(false)
            })
        } catch (err) {
            console.error(err)
        }
    }, [params])
  return (
    isLoading || !move ? 
        <>
            <Skeleton variant="rectangular" width={500} height={96} style={{marginBottom: '12px'}}/>
            <Skeleton variant="rectangular" width="100%" height={400} />
        </>
        : 
        <>
        <span style={{fontSize:40, marginBottom: '12px'}}>
                {capitalize(move?.name)}
        </span>
            <Card style={{padding: '12px', minHeight: '100%'}}>
                Type: {capitalize(move.type?.name)}
                <div style={{marginTop: '8px'}}>
                  Effects:
                  <List>
                  {move?.effect_entries.map((entrie: any) => {
                      return (
                      <ListItem key={entrie.short_effect}>
                        {entrie.effect}
                      </ListItem>)
                  })}
                  </List>
                </div>
                <div style={{marginTop: '8px'}}>
                  Generation: {move?.generation.name}
                </div>
                <div style={{marginTop: '8px'}}>
                  Learned by: 
                  <List>
                  {move?.learned_by_pokemon.map((pokemon: any) => {
                      return (
                      <ListItem key={pokemon.name}>
                        <Link href={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
                      </ListItem>)
                  })}
                  </List>
                </div>
            </Card>
        </>
  );
}
