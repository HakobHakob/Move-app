

export const SideBarData = [
  {
    title: "Search",
    path: "/search",
    icon: "/assets/icons/ICON-Search.png",
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/",
    icon: "/assets/icons/Group46.png",
    cName: "nav-text",
  },
  {
    title: "TV Showes",
    path: "/tv-showes",
    icon: "../assets/icons/Group56.png",
    cName: "nav-text",
  },
  {
    title: "Movies",
    path: "/movies",
    icon: "../assets/icons/Group54.png",
    cName: "nav-text",
  },
  {
    title: "Gebres",
    path: "/genres",
    icon: "../assets/icons/Group53.png",
    cName: "nav-text",
  },
  {
    title: "Watch Later",
    path: "/watch-later",
    icon: "../assets/icons/Group47.png",
    cName: "nav-text",
  },
]

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 1980, min: 1024 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
