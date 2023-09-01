import { createContext, useContext, useMemo } from 'react'
import { useScroll } from '../Hooks/useScroll'

const TIMEOUT = 150
export const ScrollDirection = {
  Down: 'down',
  None: 'none',
  Up: 'up',
}

export const ScrollContext = createContext({
  scrollTop: 0,
  previousScrollTop: 0,
  time: TIMEOUT,
  amountScrolled: 0,
  direction: ScrollDirection.None,
  velocity: 0,
})

export const ScrollProvider = ({ children }) => {
  const { scrollTop, previousScrollTop, time } = useScroll(TIMEOUT)
  
  console.log(scrollTop, previousScrollTop);

  const amountScrolled = scrollTop - previousScrollTop
  const direction = amountScrolled > 0 ? 'up' : 'down'


  const velocity = useMemo(() => (
    Math.abs(amountScrolled / time)
  ), [amountScrolled, time])


  const value = useMemo(() => ({
    scrollTop,
    previousScrollTop,
    time,
    amountScrolled,
    direction,
    velocity,
  }), [
    scrollTop,
    previousScrollTop,
    time,
    amountScrolled,
    direction,
    velocity,
  ])

  return (
   <ScrollContext.Provider value={value}>
     {children}
   </ScrollContext.Provider>
  )
}

export const useScrollContext = () => useContext(ScrollContext)
