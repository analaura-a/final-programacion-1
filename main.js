/*FINAL PROGRAMACIÓN 1.
ALUMNAS: Ana Laura Almirón y Brisa Marca*/

'use strict';

/*Catálogo de productos*/
let productos = [{
        id: 1,
        nombre: 'Mouse Logitech M90',
        descripcion: 'Sencillo de configurar y usar: como tiene cable, puedes conectarlo a un puerto USB y usarlo inmediatamente. Diseñado para uso ambidiestro: se sentirá cómodo, incluso tras períodos de uso prolongado. Seguimiento óptico de alta definición: disfrutará de un control preciso y uniforme del cursor, y de una selección de texto fácil, gracias al seguimiento óptico de alta definición de 1000dpi. El seguimiento óptico preciso nunca falla, ofrece un desplazamiento fluido, con o sin alfombrilla.',
        descripcionCorta: 'Disfrutará de un control preciso y uniforme del cursor, y de una selección...',
        precio: 1000,
        categoria: 'Periféricos PC',
        imagen1: 'mouse-logitech',
        imagen2: 'mouse-logitech-2',
        imagen3: 'mouse-logitech-3',
        imagen4: 'mouse-logitech-4',
        cantidad: 0,
    },
    {
        id: 2,
        nombre: 'Mouse Logitech M100',
        descripcion: 'Ya sea diestro o zurdo, se sentirá cómodo durante horas con este diseño de tamaño estándar para uso ambidiestro. El seguimiento óptico preciso nunca falla, ofrece un desplazamiento fluido, con o sin mousePad. Además, la instalación es rápida y fácil: basta con conectar el cable a un puerto USB, sin necesidad de instalar software. Consta de un seguimiento óptico de alta definición: disfrutará de un control preciso y uniforme del cursor, y de una selección de texto fácil, gracias al seguimiento óptico de alta definición (1000 dpi).',
        descripcionCorta: 'Ya sea diestro o zurdo, se sentirá cómodo durante horas con este diseño de tama...',
        precio: 4387,
        categoria: 'Periféricos PC',
        imagen1: 'Logitech-M100',
        imagen2: 'Logitech-M100-2',
        imagen3: 'Logitech-M100-3',
        imagen4: 'Logitech-M100-4',
        cantidad: 0,
    },
    {
        id: 3,
        nombre: 'Teclado PC Logitech K120',
        descripcion: 'Vuelve a disfrutar tecleando durante horas: pasa largas horas delante de tu computadora sin apenas darte cuenta con el nuevo teclado K120 de Logitech, un teclado USB, de diseño estándar y teclado numérico. Gracias a su teclado liso y delgado, con teclas planas y barra espaciadora curvada, escribirás cómodamente y sin hacer ruido durante horas y horas, ya que permite que las manos permanezcan en una posición descansada y natural mientras escribes. Cuenta con patas ajustables, si prefieres una posición más ergonómica solo tienes que extender sus patas ajustables y robustas.',
        descripcionCorta: 'Vuelve a disfrutar tecleando durante horas: pasa largas horas delante de tu...',
        precio: 4199,
        categoria: 'Periféricos PC',
        imagen1: 'LogitechK120',
        imagen2: 'LogitechK120-2',
        imagen3: 'LogitechK120',
        imagen4: 'LogitechK120-2',
        cantidad: 0,
    },
    {
        id: 4,
        nombre: 'Apple iPhone 12 Mini',
        descripcion: 'El iPhone 12 Mini incluye grandes funcionalidades en un diseño compacto de 5.4 pulgadas. Tiene una espectacular pantalla Super Retina XDR. Un frente de Ceramic Shield, cuatro veces más resistente a las caídas. Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video HDR en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic. Además, es compatible con los nuevos accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida. Un verdadero gigante.',
        descripcionCorta: 'El iPhone 12 Mini incluye grandes funcionalidades en un diseño compac...',
        precio: 291999,
        categoria: 'Celulares',
        imagen1: 'iphone-12',
        imagen2: 'iphone-12-2',
        imagen3: 'iphone-12-3',
        imagen4: 'iphone-12-4',
        cantidad: 0,
    },
    {
        id: 5,
        nombre: 'Apple iPhone 13',
        descripcion: 'Tu nuevo superpoder. Una pantalla superbrillante en un diseño resistente. Una nueva funcionalidad para grabar videos dignos de Hollywood de una forma superfácil. Un chip ultrarrápido. Y un gran salto en duración de batería que vas a notar todos los días. Una pantalla OLED más brillante que ahorra energía y se ve increíble incluso a pleno sol. Y un diseño duradero resistente al agua y al polvo.  El iPhone 13 cuenta con una pantalla OLED de 6.1 pulgadas sin marco con una resolución de 2532 x 1170 píxeles a 460 ppi que te permite visualizar tus contenidos de forma más nítida y clara.',
        descripcionCorta: 'Tu nuevo superpoder. Una pantalla superbrillante en un diseño resistente...',
        precio: 470000,
        categoria: 'Celulares',
        imagen1: 'iphone-13',
        imagen2: 'iphone-13-2',
        imagen3: 'iphone-13-3',
        imagen4: 'iphone-13-4',
        cantidad: 0,
    },
    {
        id: 6,
        nombre: 'Samsung Galaxy A13',
        descripcion: 'El Samsung A13 es el celular ideal si estás buscando una buena resolución, una excelente cámara y, por supuesto, mucha memoria para una navegación más veloz. Imágenes de calidad para disfrutar con amigos: disfrutá sacando increíbles fotografías con la cámara Quad del Samsung A13, con una resolución de 50 mpx y Flash LED, además de su zoom digital 10x. Aprovechá todo el espacio disponible para tus apps: una de las características del Samsung A13 es su memoria interna de 128 GB, de las que quedan disponibles 105 GB para tu uso personal.',
        descripcionCorta: 'El Samsung A13 es el celular ideal si estás buscando una buena resolución, una...',
        precio: 72999,
        categoria: 'Celulares',
        imagen1: 'samsungA13',
        imagen2: 'samsungA13-2',
        imagen3: 'samsungA13-3',
        imagen4: 'samsungA13-4',
        cantidad: 0,
    },
    {
        id: 7,
        nombre: 'Notebook Dell Inspiron',
        descripcion: 'Creada para el presente, diseñada para el futuro. La notebook Dell Inspiron brinda a los usuarios sostenibilidad, rendimiento y comodidad. Cuenta con una Procesador AMD Ryzen 5 3450U Quad-Core, memoria RAM de 8 GB DDR4 y memoria de almacenamiento SSD M.2 NVMe de 256 GB. Con una pantalla LED de 15.6" con resolución HD (1366 x 768p) y gráficos AMD Radeon para imágenes nítidas y claras. Manténgase en contacto con compañeros de trabajo o clientes usando la cámara web, los parlantes y el micrófono integrado. Disponible con Windows 11 Home o Windows 11 Pro.',
        descripcionCorta: 'Creada para el presente, diseñada para el futuro. La notebook Dell Inspiron brinda...',
        precio: 227039,
        categoria: 'Notebooks',
        imagen1: 'dell-inspiron',
        imagen2: 'dell-inspiron-2',
        imagen3: 'dell-inspiron-3',
        imagen4: 'dell-inspiron-4',
        cantidad: 0,
    },
    {
        id: 8,
        nombre: 'Notebook Gamer Lenovo Legion',
        descripcion: 'La destreza que muestras, los enemigos que superas, los compañeros de equipo a los que inspiras, las cosas asombrosas que haces posible cuando juegas conducen directamente a las cosas increíbles que haces en la vida. Lenovo Legion lo celebra y sirve de conducto épico para unir ambos mundos: el inconteniblemente elegante y el indomablemente salvaje. Con núcleos verdaderamente revolucionarios en rendimiento y eficiencia, los procesadores Intel Core de 12va generación son ideales para streaming, edición, juegos y grabaciones. Un máximo nivel de potencia cuando más lo necesitas.',
        descripcionCorta: 'La destreza que muestras, los enemigos que superas, los compañeros de equip...',
        precio: 419999,
        categoria: 'Notebooks',
        imagen1: 'lenovo-legion',
        imagen2: 'lenovo-legion-2',
        imagen3: 'lenovo-legion-3',
        imagen4: 'lenovo-legion-4',
        cantidad: 0,
    },
    {
        id: 9,
        nombre: 'Notebook Gamer Dell G15',
        descripcion: 'El diseño térmico inspirado en Alienware ofrece una refrigeración óptima gracias a dos entradas de aire, palas de ventilador ultrafinas, conductos de cobre y cuatro rejillas de ventilación situadas estratégicamente. Por tanto, tu sistema se mantendrá frío en el fragor de la acción. Además, con procesadores hasta Intel i5 de 12 núcleos o i7 de 14 núcleos de 12.ª generación, así como perfiles de rendimiento optimizado, puedes disfrutar de una potencia y una coherencia de alto nivel durante cualquier experiencia de juego.',
        descripcionCorta: 'El diseño térmico inspirado en Alienware ofrece una refrigeración óptima gracias...',
        precio: 339999,
        categoria: 'Notebooks',
        imagen1: 'dell-g15',
        imagen2: 'dell-g15-2',
        imagen3: 'dell-g15-3',
        imagen4: 'dell-g15-4',
        cantidad: 0,
    },

];



/*Elementos del DOM en los que se van a mostrar los productos y otra información dinámicamente*/
let contenedorProductos = document.getElementById('products');
let contenedorMain = document.getElementById('main');
let headerCarrito = document.getElementById('header-cart');
let contadorCarrito = document.getElementById('cart-count');
let totalCarrito = document.getElementById('cart-total');


/*Carrito de compras*/
const carrito = [];

/*Función para crear dinámicamente la ventana modal del carrito de compras*/
const cargarVentanaModalCarrito = function () {

    let divBgModalCarrito = document.createElement("div");
    divBgModalCarrito.classList.add("bg-modal-carrito");

    let sectionCarrito = document.createElement("section");
    sectionCarrito.classList.add("carrito");

    let spanCloseModalCarrito = document.createElement("span");
    spanCloseModalCarrito.classList.add("close-modal-carrito");
    spanCloseModalCarrito.textContent = "x";

    let divTitulo = document.createElement("div");

    let h1Titulo = document.createElement("h1");
    h1Titulo.classList.add("h1");
    h1Titulo.textContent = "Mi carrito";

    let spanSubtitulo = document.createElement("span");
    spanSubtitulo.classList.add("subtitle-carrito");
    spanSubtitulo.textContent = `0 items`;

    let divProductsContainer = document.createElement("div");
    divProductsContainer.classList.add("products-container");
    divProductsContainer.setAttribute('id', 'products-container-carrito');

    let divAcciones = document.createElement("div");

    let divSubtotal = document.createElement("div");
    divSubtotal.classList.add("subtotal");

    let pTotal = document.createElement("p");
    pTotal.textContent = "Total";

    let pTotalNúmero = document.createElement("p");
    pTotalNúmero.textContent = "$0";

    let buttonCheckout = document.createElement("button");
    buttonCheckout.classList.add("button", "main_cta", "cta_light-bg");
    buttonCheckout.textContent = "Checkout"

    let buttonVaciarCarrito = document.createElement("button");
    buttonVaciarCarrito.classList.add("empty-button");
    buttonVaciarCarrito.textContent = "Vaciar carrito";

    contenedorMain.appendChild(divBgModalCarrito);

    divBgModalCarrito.appendChild(sectionCarrito);

    sectionCarrito.appendChild(spanCloseModalCarrito);
    sectionCarrito.appendChild(divTitulo);
    sectionCarrito.appendChild(divProductsContainer);
    sectionCarrito.appendChild(divAcciones);

    divTitulo.appendChild(h1Titulo);
    divTitulo.appendChild(spanSubtitulo);

    divAcciones.appendChild(divSubtotal);
    divAcciones.appendChild(buttonCheckout);
    divAcciones.appendChild(buttonVaciarCarrito);

    divSubtotal.appendChild(pTotal);
    divSubtotal.appendChild(pTotalNúmero);


    divBgModalCarrito.style.display = "flex";
    setTimeout(() => {
        sectionCarrito.style.right = "0%";
    }, 10);


    spanCloseModalCarrito.addEventListener("click", function () {
        sectionCarrito.style.right = "-100%";
        setTimeout(() => {
            divBgModalCarrito.style.display = "none";
        }, 150);
    });

    window.addEventListener("click", function (event) {
        if (event.target == divBgModalCarrito) {
            sectionCarrito.style.right = "-100%";
            setTimeout(() => {
                divBgModalCarrito.style.display = "none";
            }, 150);
        }
    });

    carrito.forEach((producto) => {

        spanSubtitulo.textContent = `${carrito.reduce((acc, producto) => acc + producto.cantidad, 0)} items`;

        pTotalNúmero.textContent = `$${carrito.reduce((acc, producto) => acc + producto.subtotal, 0).toLocaleString('de-DE')}`;

        let divProductAdded = document.createElement("div");
        divProductAdded.classList.add("product-added");

        let divProductInfo = document.createElement("div");
        divProductInfo.classList.add("product-info");

        let imgCarrito = document.createElement("img");
        imgCarrito.classList.add("img-carrito");
        imgCarrito.setAttribute("src", `assets/imgs/${producto.imagen1}.jpg`);
        imgCarrito.setAttribute("alt", producto.nombre);

        let divDivProductInfo = document.createElement("div");

        let h2Carrito = document.createElement("h2");
        h2Carrito.classList.add("h2");
        h2Carrito.textContent = producto.nombre;

        let pProductoCarrito = document.createElement("p");
        pProductoCarrito.textContent = `$${producto.precio.toLocaleString('de-DE')}`;

        let divProductAction = document.createElement("div");
        divProductAction.classList.add("product-action");

        let spanDeleteItem = document.createElement("span");
        spanDeleteItem.classList.add("delete-item");

        let svgCarrito = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgCarrito.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgCarrito.setAttribute("width", "48");
        svgCarrito.setAttribute("height", "48");
        svgCarrito.setAttribute("viewBox", "0 0 48 48");

        let pathCarrito = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathCarrito.setAttribute("d", "M36.813 13.782a28.09 28.09 0 0 0-.325-1.166c-.212-.775-.748-.775-1.544-.909l-4.315-.558c-.536-.091-.536-.091-.748-.566C29.174 8.95 28.955 8 28.183 8h-8.37c-.771 0-.983.95-1.69 2.591-.211.466-.211.466-.747.567l-4.323.558c-.788.133-1.357.208-1.569.983 0 0-.097.341-.3 1.083-.26.991-.366.883.528.883h24.573c.893.008.796.108.528-.883ZM34.026 17.33H13.97c-1.349 0-1.414.184-1.333 1.226l1.52 20.211c.13 1.025.227 1.233 1.422 1.233h16.837c1.194 0 1.292-.208 1.422-1.233l1.52-20.211c.08-1.05.015-1.225-1.334-1.225Z");

        let spanCantidad = document.createElement("span");
        spanCantidad.classList.add("cantidad");
        spanCantidad.textContent = `Cantidad: ${producto.cantidad}`;

        divProductsContainer.appendChild(divProductAdded);

        divProductAdded.appendChild(divProductInfo);
        divProductAdded.appendChild(divProductAction);

        divProductInfo.appendChild(imgCarrito);
        divProductInfo.appendChild(divDivProductInfo);

        divDivProductInfo.appendChild(h2Carrito);
        divDivProductInfo.appendChild(pProductoCarrito);

        divProductAction.appendChild(spanDeleteItem);
        divProductAction.appendChild(spanCantidad);

        spanDeleteItem.appendChild(svgCarrito);

        svgCarrito.appendChild(pathCarrito);

    });

}

headerCarrito.addEventListener("click", cargarVentanaModalCarrito);



/*Función para agregar productos al carrito de compras*/
const agregarAlCarrito = function (e) {

    //Agregamos el producto seleccionado al carrito
    let idBoton = e.currentTarget.id;
    let productoAgregado = productos.find(producto => `agregar${producto.id}` === idBoton);

    if (carrito.some(producto => `agregar${producto.id}` === idBoton)) {
        productoAgregado.cantidad++;
        console.log(carrito);
    } else {
        productoAgregado.cantidad = 1;
        carrito.push(productoAgregado);
        console.log(carrito);
    }

    //Calculamos el subtotal
    productoAgregado.subtotal = productoAgregado.precio * productoAgregado.cantidad;

    //Calculamos el total
    let total = carrito.reduce((acc, producto) => acc + producto.subtotal, 0);
    // console.log(total);

    //Mostramos la cantidad y el total del carrito en el nav
    const actualizarContadorCarrito = function () {
        let numero = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
        contadorCarrito.setAttribute("data-header-cart-count", numero);

        totalCarrito.textContent = `$${total.toLocaleString('de-DE')}`;
    }
    actualizarContadorCarrito();


}






/*Función para mostrar el catálogo de productos*/
const cargarProductos = function (productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        let divCard = document.createElement("div");
        divCard.classList.add("card");

        let divImg = document.createElement("div");
        divImg.classList.add("card-img");

        let cardImg = document.createElement("img");
        cardImg.setAttribute("src", `assets/imgs/${producto.imagen1}.jpg`);
        cardImg.setAttribute("alt", producto.nombre);

        let divBody = document.createElement("div");
        divBody.classList.add("card-body");

        let spanCategoria = document.createElement("span");
        spanCategoria.classList.add("margin-card");
        spanCategoria.textContent = producto.categoria;

        let tituloNombre = document.createElement("h2");
        tituloNombre.classList.add("h2", "margin-tiny");
        tituloNombre.textContent = producto.nombre;

        let pDescripcion = document.createElement("p");
        pDescripcion.classList.add("margin-card");
        pDescripcion.textContent = producto.descripcionCorta;

        let spanPrecio = document.createElement("span");
        spanPrecio.classList.add("margin-card");
        spanPrecio.textContent = `$${producto.precio.toLocaleString('de-DE')}`;

        let divBotones = document.createElement("div");
        divBotones.classList.add("cta");

        let buttonMasInfo = document.createElement("button");
        buttonMasInfo.classList.add("button", "second_cta");
        buttonMasInfo.setAttribute('id', `info${producto.id}`);
        buttonMasInfo.textContent = 'Más info';

        let buttonAgregarCarrito = document.createElement("button");
        buttonAgregarCarrito.classList.add("button", "main_cta", "addtocart");
        buttonAgregarCarrito.setAttribute('id', `agregar${producto.id}`);
        buttonAgregarCarrito.textContent = 'Agregar al carrito';

        contenedorProductos.appendChild(divCard);
        divCard.appendChild(divImg);
        divCard.appendChild(divBody);

        divImg.appendChild(cardImg);

        divBody.appendChild(spanCategoria);
        divBody.appendChild(tituloNombre);
        divBody.appendChild(pDescripcion);
        divBody.appendChild(spanPrecio);
        divBody.appendChild(divBotones);

        divBotones.appendChild(buttonMasInfo);
        divBotones.appendChild(buttonAgregarCarrito);

        buttonAgregarCarrito.addEventListener('click', agregarAlCarrito);

    });

}

cargarProductos(productos);


/*Función para crear dinámicamente las ventanas modales de cada producto*/
let userInputNumber = 1;

const cargarVentanaModalProducto = function (productosElegidos) {

    productosElegidos.forEach(producto => {

        let divBgModal = document.createElement("div");
        divBgModal.classList.add("bg-modal");
        divBgModal.setAttribute('id', `modal${producto.id}`);

        let sectionModal = document.createElement("section");
        sectionModal.classList.add("modal");

        let articleGallery = document.createElement("article");
        articleGallery.classList.add("gallery");

        let divGalleryImg = document.createElement("div");
        divGalleryImg.classList.add("gallery-img-container");

        let galleryImg = document.createElement("img");
        galleryImg.classList.add("gallery-img");
        galleryImg.setAttribute("src", `assets/imgs/${producto.imagen1}.jpg`);
        galleryImg.setAttribute("alt", producto.nombre);

        let divGalleryThumbnails = document.createElement("div");
        divGalleryThumbnails.classList.add("gallery-thumbnails");

        let galleryThumbnail1 = document.createElement("img");
        galleryThumbnail1.classList.add("selected", "thumbnail");
        galleryThumbnail1.setAttribute("src", `assets/imgs/${producto.imagen1}.jpg`);
        galleryThumbnail1.setAttribute("alt", producto.nombre);
        galleryThumbnail1.setAttribute('id', `${producto.id}-1`);

        let galleryThumbnail2 = document.createElement("img");
        galleryThumbnail2.classList.add("thumbnail");
        galleryThumbnail2.setAttribute("src", `assets/imgs/${producto.imagen2}.jpg`);
        galleryThumbnail2.setAttribute("alt", producto.nombre);
        galleryThumbnail2.setAttribute('id', `${producto.id}-2`);

        let galleryThumbnail3 = document.createElement("img");
        galleryThumbnail3.classList.add("thumbnail");
        galleryThumbnail3.setAttribute("src", `assets/imgs/${producto.imagen3}.jpg`);
        galleryThumbnail3.setAttribute("alt", producto.nombre);
        galleryThumbnail3.setAttribute('id', `${producto.id}-3`);

        let galleryThumbnail4 = document.createElement("img");
        galleryThumbnail4.classList.add("thumbnail");
        galleryThumbnail4.setAttribute("src", `assets/imgs/${producto.imagen4}.jpg`);
        galleryThumbnail4.setAttribute("alt", producto.nombre);
        galleryThumbnail4.setAttribute('id', `${producto.id}-4`);

        let articleContent = document.createElement("article");
        articleContent.classList.add("content");

        let divDetails = document.createElement("div");
        divDetails.classList.add("details");

        let spanCategoriaModal = document.createElement("span");
        spanCategoriaModal.classList.add("subtitle", "margin-modal-subtitle");
        spanCategoriaModal.textContent = producto.categoria;

        let tituloNombreModal = document.createElement("h1");
        tituloNombreModal.classList.add("h1", "margin-modal");
        tituloNombreModal.textContent = producto.nombre;

        let pDescripcionModal = document.createElement("p");
        pDescripcionModal.classList.add("description", "margin-modal");
        pDescripcionModal.textContent = producto.descripcion;

        let pPrecioModal = document.createElement("p");
        pPrecioModal.classList.add("price", "margin-modal");
        pPrecioModal.textContent = `$${producto.precio.toLocaleString('de-DE')}`;

        let divProductQuantity = document.createElement("div");
        divProductQuantity.classList.add("product-quantity");

        let divInputPrice = document.createElement("div");
        divInputPrice.classList.add("input-price");

        let spanInputMinus = document.createElement("span");
        spanInputMinus.classList.add("input-minus");
        spanInputMinus.textContent = "-";

        let inputNumber = document.createElement("input");
        inputNumber.classList.add("input-number");
        inputNumber.setAttribute("type", "text");
        inputNumber.setAttribute("value", "1");

        let spanInputPlus = document.createElement("span");
        spanInputPlus.classList.add("input-plus");
        spanInputPlus.textContent = "+";

        let buttonAgregarCarritoModal = document.createElement("button");
        buttonAgregarCarritoModal.classList.add("button", "main_cta", "cta_light-bg", "addtocart");
        buttonAgregarCarritoModal.setAttribute('id', `agregar${producto.id}modal`);
        buttonAgregarCarritoModal.textContent = 'Agregar al carrito';

        let spanCloseModal = document.createElement("span");
        spanCloseModal.classList.add("close-modal");
        spanCloseModal.setAttribute('id', `cerrar${producto.id}`);
        spanCloseModal.textContent = "x";

        contenedorMain.appendChild(divBgModal);

        divBgModal.appendChild(sectionModal);

        sectionModal.appendChild(articleGallery);
        sectionModal.appendChild(articleContent);
        sectionModal.appendChild(spanCloseModal);

        articleGallery.appendChild(divGalleryImg);
        articleGallery.appendChild(divGalleryThumbnails);

        divGalleryImg.appendChild(galleryImg);

        divGalleryThumbnails.appendChild(galleryThumbnail1);
        divGalleryThumbnails.appendChild(galleryThumbnail2);
        divGalleryThumbnails.appendChild(galleryThumbnail3);
        divGalleryThumbnails.appendChild(galleryThumbnail4);

        articleContent.appendChild(divDetails);
        articleContent.appendChild(divProductQuantity);

        divDetails.appendChild(spanCategoriaModal);
        divDetails.appendChild(tituloNombreModal);
        divDetails.appendChild(pDescripcionModal);
        divDetails.appendChild(pPrecioModal);

        divProductQuantity.appendChild(divInputPrice);
        divProductQuantity.appendChild(buttonAgregarCarritoModal);

        divInputPrice.appendChild(spanInputMinus);
        divInputPrice.appendChild(inputNumber);
        divInputPrice.appendChild(spanInputPlus);

        /*Funcionamiento de las ventanas modales*/
        let buttonMasInfoModal = document.getElementById(`info${producto.id}`);
        let modalConID = document.getElementById(`modal${producto.id}`);

        buttonMasInfoModal.addEventListener("click", function () {
            modalConID.style.display = "grid";
        });

        spanCloseModal.addEventListener("click", function () {
            modalConID.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target == modalConID) {
                modalConID.style.display = "none";
            }
        });

        /*Funcionamiento de la galería de fotos*/
        let thumbnailsGaleria = [galleryThumbnail1, galleryThumbnail2, galleryThumbnail3, galleryThumbnail4];

        thumbnailsGaleria.forEach(thumbnail => {
            thumbnail.addEventListener("click", (e) => {

                //Destacamos visualmente la elección del usuario
                thumbnailsGaleria.forEach(boton => {
                    boton.classList.remove("selected");
                });
                e.currentTarget.classList.add("selected");

                //Reemplazamos el src de la imagen principal por la de la imagen en miniatura seleccionada
                galleryImg.setAttribute("src", `${e.currentTarget.src}`);

            });
        });



        /*Funcionalidad para que el usuario pueda elegir la cantidad de productos que quiere agregar al carrito*/
        spanInputPlus.addEventListener("click", () => {

            userInputNumber++;

            inputNumber.setAttribute("value", userInputNumber);
        })

        spanInputMinus.addEventListener("click", () => {

            if (userInputNumber <= 1) {
                userInputNumber = 1;
            } else {
                userInputNumber--;
            }

            inputNumber.setAttribute("value", userInputNumber);

        });



        let lastValue = parseInt(inputNumber.value);

        /*Función para agregar productos al carrito desde las ventanas modales*/
        const agregarAlCarritoDesdeModal = function (e) {

            //Identificamos el producto a agregar
            let idBoton = e.currentTarget.id;
            let productoAgregado = productos.find(producto => `agregar${producto.id}modal` === idBoton);


            //Agregamos la cantidad del producto seleccionado al carrito
            if (carrito.some(producto => `agregar${producto.id}modal` === idBoton)) {

                lastValue = userInputNumber;
                productoAgregado.cantidad += lastValue;
                console.log(carrito);

            } else {
                lastValue = parseInt(inputNumber.value);
                productoAgregado.cantidad = lastValue;
                carrito.push(productoAgregado);

                console.log(carrito);
            }

            //Calculamos el subtotal
            productoAgregado.subtotal = productoAgregado.precio * productoAgregado.cantidad;

            //Calculamos el total
            let total = carrito.reduce((acc, producto) => acc + producto.subtotal, 0);

            //Mostramos la cantidad y el total del carrito en el nav
            const actualizarContadorCarrito = function () {
                let numero = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
                contadorCarrito.setAttribute("data-header-cart-count", numero);

                totalCarrito.textContent = `$${total.toLocaleString('de-DE')}`;
            }
            actualizarContadorCarrito();


        }


        buttonAgregarCarritoModal.addEventListener('click', agregarAlCarritoDesdeModal);



    });

}

cargarVentanaModalProducto(productos);
















/*Función para cambiar de categoría en el catálogo de productos (y rotar los banners flotantes)*/
let botonesCategoria = document.querySelectorAll('.category-button');
let tituloCategoria = document.getElementById('titulo-categoria');
let bannerFlotante = document.getElementById('img-banner');
let banners = ['assets/imgs/banner-1.jpg', 'assets/imgs/banner-2.jpg', 'assets/imgs/banner-3.jpg'];
let timerID = null;

botonesCategoria.forEach(boton => {

    boton.addEventListener("click", (e) => {

        //Cambiamos la imagen del banner cada vez que se cambia de categoría
        const rotacionBanner = function () {

            bannerFlotante.style.display = "block";

            //Selección de uno de los banners al azar
            const eleccionBanner = Math.floor(Math.random() * 3);
            const eleccionRandom = banners[eleccionBanner];
            bannerFlotante.setAttribute("src", eleccionRandom);

            //Desaparición del banner después de 10 segundos
            let eliminarBanner = function () {
                clearTimeout(timerID);

                timerID = setTimeout(() => {
                    bannerFlotante.style.display = "none";
                }, 10000);
            }
            eliminarBanner();
        }

        //Mostramos visualmente la elección de categoría del usuario
        botonesCategoria.forEach(boton => {
            boton.classList.remove("active");
        });
        e.currentTarget.classList.add("active");

        //Utilizamos el método filter para crear un array que contenga los productos de la categoría seleccionada y lo mostramos en el HTML usándolo como parámetro en nuestra función cargarProductos
        if (e.currentTarget.id != "Todos") {
            //También usamos el método find para obtener el nombre de la categoría seleccionada y poder mostrarlo visualmente
            let nombreCategoriaElegida = productos.find(producto => producto.categoria === e.currentTarget.id);
            tituloCategoria.textContent = nombreCategoriaElegida.categoria;

            let productosBoton = productos.filter(producto => producto.categoria === e.currentTarget.id);
            cargarProductos(productosBoton);
            cargarVentanaModalProducto(productosBoton);
            rotacionBanner();
        } else {
            tituloCategoria.textContent = "Destacados";
            cargarProductos(productos);
            cargarVentanaModalProducto(productos);
            rotacionBanner();
        }

    });

});