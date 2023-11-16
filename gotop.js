document.addEventListener("DOMContentLoaded", function () {
    var btnSubir = document.getElementById("btnSubir");

    // Muestra u oculta el botón según el desplazamiento de la página
    window.onscroll = function () {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Establece el límite máximo al bajar toda la página (últimos 150 px)
        var limiteBajada = document.documentElement.scrollHeight - window.innerHeight - 150;

        // Ajusta la condición para mostrar u ocultar el botón con el límite
        if (scrollPosition > limiteBajada) {
            btnSubir.style.marginBottom = "150px";
        } else {
            btnSubir.style.display = "block";
            btnSubir.style.marginBottom = "0px";
        }
    };

    // Desplazamiento suave al hacer clic en el botón
    btnSubir.onclick = function () {
        scrollToTop(1000); // 1000 es la duración en milisegundos
    };

    function scrollToTop(duration) {
        var start = window.scrollY || document.documentElement.scrollTop;
        var startTime = performance.now();

        function scroll() {
            var elapsed = performance.now() - startTime;
            var progress = Math.min(elapsed / duration, 1);

            var newPosition = start * (1 - progress);

            // Ajusta la posición para que no descienda más allá del límite
            newPosition = Math.max(newPosition, 0);

            window.scroll(0, newPosition);

            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        }

        requestAnimationFrame(scroll);
    }
});
