import React from 'react'
import './directory.style.scss'
import data from './directory.data'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component{
    constructor() {
        super();  
        this.state = {
            sections: data
        }
    }
    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...sectionOther}) => (
                        <MenuItem key={id} {...sectionOther}/>
                    ))
                }
           </div> 
        )
    }
}

export default Directory;