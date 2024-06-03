import imagen from "/public/parking.png";

function Indice() {
  return (
    <div className="flex">
      <img className="imagenInicio" src={imagen} />
    </div>
  );
}

export { Indice as Component, Indice as default };
