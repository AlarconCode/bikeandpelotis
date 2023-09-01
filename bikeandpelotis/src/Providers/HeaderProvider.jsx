import { createContext, useMemo, useContext, useEffect } from 'react'

import { ScrollDirection, useScrollContext } from './ScrollProvider'
import { useVisibility } from '../Hooks/useVisibility'

const TOP_START = 10 // how many px from the top of the page should the show/hide behaviour start

export const HeaderContext = createContext({  
  isVisible: true,  
})

export const HeaderProvider = ({ children }) => {  
  const { isVisible, show, hide } = useVisibility(true)
  const {    
    scrollTop,    
    direction,  
  } = useScrollContext()
  
  useEffect(() => {    
    const shouldShow = scrollTop <= TOP_START || direction !== ScrollDirection.Down    
    const shouldHide = (      
      scrollTop > TOP_START &&      
      direction === ScrollDirection.Down    
    )    
    if (shouldShow) {      
      show()    
    } else if (shouldHide) {      
      hide()    
    }  
  }, [scrollTop, direction, hide, show])
  
  const value = useMemo(() => ({    
    isVisible,      
  }), [    
    isVisible, 
  ])

  return (    
    <HeaderContext.Provider value={value}>      
      {children}    
    </HeaderContext.Provider>  
  )
}

export const useHeaderContext = () => useContext(HeaderContext)

