import React from 'react'
import './HeaderList.css'
import MenuIcon from '@material-ui/icons/Menu';

function HeaderList() {
   return (
      <div className="HeaderList" >
         <ul className="HeaderList__List">
            <li className="HeaderList__item"><MenuIcon/>All</li>
            <li className="HeaderList__item">Fresh</li>
            <li className="HeaderList__item">Browsing History</li>
            <li className="HeaderList__item">Toys & Games</li>
            <li className="HeaderList__item">Gift Ideas</li>
            <li className="HeaderList__item">Baby</li>
            <li className="HeaderList__item">Gift Cards</li>
         </ul>
      </div>
   )
}

export default HeaderList
