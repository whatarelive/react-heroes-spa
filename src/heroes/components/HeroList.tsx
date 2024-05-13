import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from '../components';
import { useMemo } from 'react';



export const HeroList = ({ publisher }: { publisher: string }) => {
  
  const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]); 

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map( heroe => (
                <HeroCard key={ heroe.id } hero={ heroe }/>
            ))
        }
    </div>    
  )
}
