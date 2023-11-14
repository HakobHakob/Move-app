import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SideBarData } from "../SidebarData"
import "./Navbar.css"

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <nav className={hoveredIndex === null ? " nav-menu" : "nav-menu active"}>
      <ul className="nav-menu-items">
        {SideBarData.map((item, index) => {
          return (
            <li
              key={index}
              className={`${item.cName}  ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseOver={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                setHoveredIndex(null)
                if (sidebar) {
                  toggleSidebar()
                }
              }}
            >
              <Link to={item.path}>
                <div className="menu-item">
                  <img src={item.icon} alt={item.title} />
                  <span
                    className={`menu-span   ${
                      hoveredIndex === index ? "menu-span active" : ""
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
      <ul>
        <li className="menu-bottom-link">
          <Link to="#">
            <div
              className={`menu-bottom ${
                hoveredIndex !== null ? "show-menu-bottom" : ""
              } `}
            >
              <span>LANGUAGE</span>
              <span>GET HELP</span>
              <span>EXIT</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
