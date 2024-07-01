import {useState, useEffect, AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal} from 'react'
import { Skeleton, Card, Link, List, ListItem } from '@mui/material';
import { fetcher } from '../../services/PokemonMovesDataFetcher'
import { useParams } from 'next/navigation';
import SimpleDataTable from '@/components/atoms/tables/SimpleDataTable';
const columns = [
    { field: 'name', headerName: 'Name'},
    { field: 'Link', headerName: 'Link', slot: (item: { name: string }) => (<td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root" key={`link-${item.name}`}><Link href={`moves/${item.name}`}>{item.name}</Link></td>)},
  ];
  

export default function Move() {
    const [moves, setMoves] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        try {
            setIsLoading(true)
            fetcher.getAllPokemonMoves().then(({results}) => {
              setMoves(results)
            }).finally(() =>{
              setIsLoading(false)
            })
        } catch (err) {
            console.error(err)
        }
    }, [])
  return (
    isLoading || !moves ? 
        <>
            <Skeleton variant="rectangular" width={500} height={96} style={{marginBottom: '12px'}}/>
            <Skeleton variant="rectangular" width="100%" height={400} />
        </>
        : 
        <>
        <span style={{fontSize:40, marginBottom: '12px'}}>
                Moves
        </span>
            <Card style={{padding: '12px', minHeight: '100%'}}>
               <SimpleDataTable columns={columns} rows={moves}></SimpleDataTable>
            </Card>
        </>
  );
}
