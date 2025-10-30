export default function Inicio() {
    return (
        <div id="login" className="boton">
            <h2>Iniciar Sesión</h2>
            <form id="form-inicio">
                <input type="text" id="Usuario" placeholder="Usuario" required />
                <input type="password" id="password" placeholder="Contraseña" required />
                <button type="submit">Ingresar</button>
            </form>
            <div id="mensaje-inicio"></div>
        </div>
    );
}
