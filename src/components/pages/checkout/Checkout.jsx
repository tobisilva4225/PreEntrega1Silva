export const Checkout = ({ envioDeFormulario, capturar }) => {
  return (
    <div>
      <form onSubmit={envioDeFormulario}>
        <input
          type="text"
          placeholder="ingresa tu nombre"
          onChange={capturar}
          name="name"
        />
        <input
          type="text"
          placeholder="ingresa tu apellido"
          onChange={capturar}
          name="lastName"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
