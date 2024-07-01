import {useState, useEffect, AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal} from 'react'
import { Skeleton, Card, Link, List, ListItem } from '@mui/material';
import { fetcher } from '../../services/pokemon'
import SimpleDataTable from '@/components/atoms/tables/SimpleDataTable';
const columns = [
    { field: 'name', headerName: 'Name'},
    { field: 'Link', headerName: 'Link', slot: (item: { name: string }) => (<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root" key={`link-${item.name}`}><Link href={`pokemons/${item.name}`}>{item.name}</Link></td>)},
  ];
  

export default function Move() {
    const [pokemons, setPokemons] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        try {
            setIsLoading(true)
            fetcher.getAllPokemons().then(({results}) => {
              setPokemons(results)
            }).finally(() =>{
              setIsLoading(false)
            })
        } catch (err) {
            console.error(err)
        }
    }, [])
  return (
    isLoading || !pokemons ? 
        <>
            <Skeleton variant="rectangular" width={500} height={96} style={{marginBottom: '12px'}}/>
            <Skeleton variant="rectangular" width="100%" height={400} />
        </>
        : 
        <>
        <span style={{fontSize:40, marginBottom: '12px'}}>
                Pokemons
        </span>
            <Card style={{padding: '12px', minHeight: '100%'}}>
               <SimpleDataTable columns={columns} rows={pokemons}></SimpleDataTable>
            </Card>
        </>
  );
}
