$(document).ready(function () {
     $('#miFormulario').on('submit', function (e) {
          e.preventDefault(); // Evita que el formulario se envíe inmediatamente
          Swal.fire({
               title: "¡Consulta enviada!",
               text: "¡La consulta se ha enviado correctamente!",
               icon: "success"
          }).then((result) => {
               if (result.isConfirmed) {
                    // Si deseas enviar el formulario después de mostrar la alerta
                    e.currentTarget.submit();
               }
          });
     });
});