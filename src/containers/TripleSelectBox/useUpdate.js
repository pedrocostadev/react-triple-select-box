import { useEffect, useRef } from 'react'

export const useUpdate = ({ deps, onUpdate }) => {

    const isInitialMount = useRef(true)

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
            return
        }
        onUpdate()
    }, deps.map(dep => JSON.stringify(dep)))

}