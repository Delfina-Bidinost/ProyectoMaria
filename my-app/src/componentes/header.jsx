export default function Header(){
    return(
        <header>
        <div className="container">
            <h1 className="logo">Quek Shoes</h1>
    
            <div className="header-botones">
                <button id="btn-inicio" className="btn-inicio">Iniciar Sesión</button>
                <button id="btn-carrito" className="btn-carrito">
                    Carrito <span id="contador-carrito">0</span>
                </button>
            </div>
        </div>
    </header>

    )
}