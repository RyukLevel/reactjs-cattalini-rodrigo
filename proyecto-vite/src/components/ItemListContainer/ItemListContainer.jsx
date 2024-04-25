import './ItemListContainer.css'

export const ItemListContainer = ({saludo}) => {
    
    const defaultTitle = "Default Title"
    
  return (
    <main>
    <h1>{saludo ? saludo : defaultTitle }</h1>
    <p>Buscas consolas retro? Lo tenemos</p>
    <p>Buscas las consolas del momento? Acá es tu lugar</p>
    </main>
  )
}

