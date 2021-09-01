import React from 'react'
import "./sidebarOption.css"; 

function SidebarOption({ title, Icon }) {
    return (
        <div className="sidebarOption">
        {/* two children in a container, the container being sidebarOption, name of this div  */}
            {Icon && <Icon className="sidebarOption_icon" /> }
            {/* if there is an icon show icon with h4, if no icon then render title */}
           {Icon ? <h4>{title}</h4> : <p>{title}</p> }

        </div>
    )
}

export default SidebarOption