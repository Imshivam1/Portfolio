import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid' // Importing components for the grid layout
import { title } from 'process' // This might be unused, consider removing if unnecessary

const Grid = () => {
  return (
    <section id='about'> {/* Section for the grid, identified by 'about' */}
        <BentoGrid> {/* BentoGrid serves as the container for the grid items */}
            {/* Mapping over the array of items to dynamically create grid elements */}
            {[{ title :'Title 1', description : 'Desc1', id: '1'}].map((item) => (
                <BentoGridItem 
                id={item.id} // Each BentoGridItem gets a unique ID
                key={item.id} // React key to ensure uniqueness for each rendered item
                title={item.title} // Passing title as a prop to BentoGridItem
                description={item.description} // Passing description as a prop to BentoGridItem
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
