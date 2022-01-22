import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const useAos = () => {
    useEffect(() => {
        AOS.init({
            offset : 100,
            easing : 'ease'
        });
    }, [])
}

export default useAos;