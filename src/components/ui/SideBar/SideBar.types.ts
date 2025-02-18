export type Links = {
    label: string
    href: string
    icon: React.JSX.Element | React.ReactNode
  }
  
  export type SidebarContextProps = {
    open: boolean
    // setOpen: React.Dispatch<React.SetStateAction<boolean>>
    // animate: boolean
  }