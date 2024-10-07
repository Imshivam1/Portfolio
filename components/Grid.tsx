import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { title } from 'process'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {[{ title :'Title 1', description : 'Desc1', id: '1'}].map((item) =>(
                <BentoGridItem 
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid