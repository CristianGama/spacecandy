import { createBrowserRouter } from 'react-router-dom'

import Home from './routes/home'
import Categories from './routes/categories'
import Category from './routes/category'
import SobreNosotros from './routes/sobre-nosotros'
import TerminosCondiciones from './routes/terminosCondiciones'
import AvisosPrivacidad from './routes/avisosPrivacidad'

import { ShoppingCarProvider } from './components/shopping-context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/categories',
    element: <ShoppingCarProvider><Categories></Categories></ShoppingCarProvider>,
    children: [
      {
        path: 'explosiones-picosas',
        element: <Category title='Explosiones Picosas' id={1}></Category>
      },
      {
        path: 'acidos-intergalacticos',
        element: <Category title='Acidos Intergalacticos' id={2}></Category>
      },
      {
        path: 'dulces-galacticos',
        element: <Category title='Dulces Galacticos' id={3}></Category>
      },
      {
        path: 'gomitas-cosmicas',
        element: <Category title='Gomitas Cosmicas' id={4}></Category>
      },
      {
        path: 'snacks-espaciales',
        element: <Category title='Snacks Espaciales' id={5}></Category>
      },
      {
        path: 'sobre-nosotros',
        element: <SobreNosotros></SobreNosotros>
      },
      {
        path: 'terminos-condiciones',
        element: <TerminosCondiciones></TerminosCondiciones>
      },
      {
        path: 'avisos-privacidad',
        element: <AvisosPrivacidad></AvisosPrivacidad>
      },
    ]
  }
]);

export default router;
