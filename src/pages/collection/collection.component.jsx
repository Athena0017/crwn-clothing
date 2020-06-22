import React from 'react'
import {connect} from 'react-redux'

import './collection.styles.scss'

//import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollections } from '../../redux/shop/shop.selector'
//import { createStructuredSelector} from  'reselect'
const CollectionPage = ({collection}) => {
    console.log(collection)
    return (
        <div className='collection-page'>
           <h2>Collection PAGE</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collections:selectCollections(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
