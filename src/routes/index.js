import Header from '../templates/Header'
import Footer from '../templates/Footer'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
    '/:pages': Home,
}



const router = async () => {

    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    const footer = null || document.getElementById('footer')
    let hash = getHash()
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404

    header.innerHTML = await Header()
    content.innerHTML = await render()
    footer.innerHTML = await Footer()

    const buttonDarkMode = document.getElementById('switch')
    buttonDarkMode.addEventListener("click", () => {
        document.body.classList.toggle('dark')
    })
}

export default router;
