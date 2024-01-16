import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './modalMenu.css'

const ModalMenu = ({ active, setActive }) => {

    const links = [
        {id:1, name: 'Main Page', src:'/'},
        {id:2, name: 'Catalog', src:'/categories'},
        {id:3, name: 'Products', src:'/products/all'},
        {id:4, name: 'Sales', src:'/sales/sales'},
    ]

    return (
        <div className={active ? `${s.menu} ${s.active}`: s.menu} onClick={ ()=> setActive(false)} >
            <div className={s.blur}>
            </div>
            <nav className={s.menu_content}  >
                {
                    links.map(({id, name, src})=>
                        <NavLink className={s.link} key={id} to={src}>
                            {name}
                        </NavLink>)
                }
            </nav>
        </div>
    );
};

export default ModalMenu;