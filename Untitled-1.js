// Simulación de almacenamiento local
let ventas = [];

function registrarVenta() {
    const cliente = document.getElementById("cliente").value;
    const producto = document.getElementById("producto").value;
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;

    if (cliente && producto && cantidad && precio) {
        const total = cantidad * precio;
        ventas.push({ cliente, producto, cantidad, total });
        actualizarTablaVentas();
        alert("Venta registrada con éxito");
    } else {
        alert("Por favor complete todos los campos.");
    }
}

function actualizarTablaVentas() {
    const tbody = document.getElementById("ventas-table-body");
    tbody.innerHTML = "";
    ventas.forEach((venta) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${venta.cliente}</td>
            <td>${venta.producto}</td>
            <td>${venta.cantidad}</td>
            <td>$${venta.total}</td>
        `;
        tbody.appendChild(row);
    });
}
