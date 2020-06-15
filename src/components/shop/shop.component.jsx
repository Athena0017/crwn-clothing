import React, { Component } from 'react'
import data from './shop.data'
import CollectionPreview from '../collection-preview/collection-preview.component'

export default class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections:data
        }
    }
    render() {
        const { collections } = this.state;
        console.log(collections);
        
        return (
            
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollection }) => (
                        <CollectionPreview key={id} {...otherCollection}/>
                    ))
                }
            </div>
        )
    }
}
