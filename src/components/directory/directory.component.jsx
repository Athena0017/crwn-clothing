import React from 'react'
import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections} from '../../redux/directory/directory.selector'

const Directory =({sections})=>{
        return (
            <div className="directory-menu">
                {
                    sections.map(({ id, ...sectionOther}) => (
                        <MenuItem key={id} {...sectionOther}/>
                    ))
                }
           </div> 
        )
}

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory);