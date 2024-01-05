function navbar() {

    //  OBTENER NOMBRE DEL ARCHIVO HTML DONDE FUE INVOCADA LA CARGA DEL
    //  NAVBAR (BARRA DE NAVEGACIÓN O MENÚ)
    const htmlName = window.location.pathname;
    let activeIndex = "";
    let activeCatalogo1 = "";
    let activeCatalogo2 = "";
    let activeCarroCompra = "";

    console.log('PÁGINA SELECCIONADA: ', htmlName);

    /*  VALIDACIÓN PARA MODIFICAR CSS EN EL MENÚ DEJANDO ACTIVO LA PÁGINA ACTUAL*/
    if (htmlName.includes("index.html")) {
        activeIndex = " activate text-white";
    } else if (htmlName.includes("catalogo1.html")) {
        activeCatalogo1 = " activate text-white";
    } else if (htmlName.includes("catalogo2.html")) {
        activeCatalogo2 = " activate text-white";
    } else if (htmlName.includes("carro-compras.html")) {
        activeCarroCompra = " activate text-white";
    }

    /*  INTERPOLACIÓN QUE PERMITE REEMPLAZAR EN EL TEXTO LAS VARIABLES  activeCatalogov1, activeCatalogov2
        CON LOS VALORES DEFINIDOS ANTERIORMENTE. 

        https://www.freecodecamp.org/espanol/news/como-utilizar-la-interpolacion-de-cadenas-en-javascript/

    */
    const nav = `
        <nav class="navbar navbar-expand-lg barra" data-bs-theme="dark">
        <div class="container-fluid">
        <a a class="nav-link${activeIndex} linkbarra" href="index.html">
        <div class="iconobarra_titulo">
        <img class="icono" src="https://svgsilh.com/svg/3099712.svg" alt="Bootstrap" width="30" height="24">
        <p class="t_icono">MUSIC</p>
        <p class="t_icono2"> PRO</p>
      </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link${activeIndex} linkbarra" href="index.html">
                    <p class="linkbarra">Inicio</p>
                    </a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link${activeCatalogo1} linkbarra" href="catalogo1.html">
                    <p class="linkbarra">Catalogo</p>
                    </a>
                </li>                 
            </ul>
        </div>
         <button class="btn btngit">
            <a href="https://github.com/josemedina1/MusicPro" target="_blank">
                <div class="divgit"> 
                    <img class="imggit" src="https://1000marcas.net/wp-content/uploads/2020/02/logo-GitHub.png" alt="">
                </div>
            </a>
         </button>
        </div>
    </nav>
    `;
    var path = window.location.pathname;
    console.log('OBTENER DIV CON id = navbar');
    const navHTML = document.getElementById("navbar");
    console.log('RENDERIZANDO O REESCRIBIENDO DIV CON id = navbar AGREGANDO LA INFORMACIÓN DE LA VARIABLE navHTML');
    /* SE REESCRIBE ESTRUCTURA DIV CON INNERHTML

        https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
    */
    navHTML.innerHTML = nav;

}

navbar();

const footer = document.getElementById('footer');

const footerContent = `<div class="row">
                <div class="col-md-6">
                <h5>Redes sociales</h5>
                
                <div class="social-links">
                    <a href="https://www.linkedin.com/in/jos%C3%A9-medina-vera-8323a5b8/" target="_blank">
                    <div id="linkedin" class="social-btn flex-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>
                        <span>linkedin</span>
                    </div>
                    </a>

                    <a href="https://github.com/josemedina1/MusicPro" target="_blank">
                    <div id="github" class="social-btn flex-center">
                        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        <span>Github</span>
                    </div>
                    </a>

                </div>

                </div>

                <div class="col-md-6">
                <h5>Información adicional</h5>
                <ul class="list-unstyled">
                    <li>Este sitio web es fue desarrollado por</li>
                    <li>[José Medina] </li>
                </ul>
                <hr>

                </div>
                </div>
`;

footer.innerHTML = footerContent;