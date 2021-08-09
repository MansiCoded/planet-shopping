import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor(){
        super();

        this.state ={
            sections: [
                {
                  title: 'MARS',
                  imageUrl: 'images/mars.png',
                  id: 1,
                  linkUrl: 'shop/mars'
                },
                {
                  title: 'JUPITER',
                  imageUrl: 'images/jupiter.png',
                  id: 2,
                  linkUrl: 'shop/jupiter'
                },
                {
                  title: 'VENUS',
                  imageUrl: 'images/venus.png',
                  id: 3,
                  linkUrl: 'shop/venus'
                },
                {
                  title: 'PLUTO',
                  imageUrl: 'images/pluto.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/pluto'
                },
                {
                  title: 'SATURN',
                  imageUrl: 'images/saturn.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/saturn'
                }
              ]
        }
    }

    render(){
        return (
        <div className='directory-menu'>
            {
                this.state.sections.map(({title, imageUrl, id, size})=>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>
                ))
            }
        </div>)
    }
}

export default Directory;