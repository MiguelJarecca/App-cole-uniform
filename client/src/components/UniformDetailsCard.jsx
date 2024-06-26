import { useCart } from "../hooks/useCart";

export const UniformDetailsCard = ({ uniformDetails }) => {

    const { handlerAddCart } = useCart();

    if (!uniformDetails) {
        return <div>No hay información disponible.</div>;
    }

    const { image, product, gender, size, price } = uniformDetails;
    if (!image) {
        return <div>Información de imagen no disponible.</div>;
    }

    return (
        <>
            <div className="container-image-elem1">
                <img src={`data:${image.mime};base64,${image.content}`} alt={"uniforme"} />
            </div>

            <article className="container-content-elem2">
                <div className="div-details">
                    <h2>COLEGIO JORGE CHAVEZ</h2>
                    <h1>{product}</h1>
                    <h3>s/. {price}</h3>

                </div>

                <div className="div-talla">
                    <h2>Talla</h2>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />

                </div>

                    <button
                        type="submit"
                        onClick={() => handlerAddCart(uniformDetails)}
                        >
                        Agregar al carrito    
                    </button>

            </article>

            
        </>
    )
}