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
        categoría: 'Periféricos PC',
        imagen1: 'mouse-logitech',
        imagen2: 'mouse-logitech-2',
        imagen3: 'mouse-logitech-3',
        imagen4: 'mouse-logitech-4',
    },
    {
        id: 2,
        nombre: 'Mouse Logitech M100',
        descripcion: 'Ya sea diestro o zurdo, se sentirá cómodo durante horas con este diseño de tamaño estándar para uso ambidiestro. El seguimiento óptico preciso nunca falla, ofrece un desplazamiento fluido, con o sin mousePad. Además, la instalación es rápida y fácil: basta con conectar el cable a un puerto USB, sin necesidad de instalar software. Consta de un seguimiento óptico de alta definición: disfrutará de un control preciso y uniforme del cursor, y de una selección de texto fácil, gracias al seguimiento óptico de alta definición (1000 dpi).',
        descripcionCorta: 'Ya sea diestro o zurdo, se sentirá cómodo durante horas con este diseño de tama...',
        precio: 4387,
        categoría: 'Periféricos PC',
        imagen1: 'Logitech-M100',
        imagen2: 'Logitech-M100-2',
        imagen3: 'Logitech-M100-3',
        imagen4: 'Logitech-M100-4',
    },
    {
        id: 3,
        nombre: 'Teclado PC Logitech K120',
        descripcion: 'Vuelve a disfrutar tecleando durante horas: pasa largas horas delante de tu computadora sin apenas darte cuenta con el nuevo teclado K120 de Logitech, un teclado USB, de diseño estándar y teclado numérico. Gracias a su teclado liso y delgado, con teclas planas y barra espaciadora curvada, escribirás cómodamente y sin hacer ruido durante horas y horas, ya que permite que las manos permanezcan en una posición descansada y natural mientras escribes. Cuenta con patas ajustables, si prefieres una posición más ergonómica solo tienes que extender sus patas ajustables y robustas.',
        descripcionCorta: 'Vuelve a disfrutar tecleando durante horas: pasa largas horas delante de tu...',
        precio: 4199,
        categoría: 'Periféricos PC',
        imagen1: 'LogitechK120',
        imagen2: 'LogitechK120-2',
        imagen3: 'LogitechK120',
        imagen4: 'LogitechK120-2',
    },
    {
        id: 4,
        nombre: 'Apple iPhone 12 Mini',
        descripcion: 'El iPhone 12 Mini incluye grandes funcionalidades en un diseño compacto de 5.4 pulgadas. Tiene una espectacular pantalla Super Retina XDR. Un frente de Ceramic Shield, cuatro veces más resistente a las caídas. Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video HDR en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic. Además, es compatible con los nuevos accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida. Un verdadero gigante.',
        descripcionCorta: 'El iPhone 12 Mini incluye grandes funcionalidades en un diseño compac...',
        precio: 291999,
        categoría: 'Celulares',
        imagen1: 'iphone-12',
        imagen2: 'iphone-12-2',
        imagen3: 'iphone-12-3',
        imagen4: 'iphone-12-4',
    },
    {
        id: 5,
        nombre: 'Apple iPhone 13',
        descripcion: 'Tu nuevo superpoder. Una pantalla superbrillante en un diseño resistente. Una nueva funcionalidad para grabar videos dignos de Hollywood de una forma superfácil. Un chip ultrarrápido. Y un gran salto en duración de batería que vas a notar todos los días. Una pantalla OLED más brillante que ahorra energía y se ve increíble incluso a pleno sol. Y un diseño duradero resistente al agua y al polvo.  El iPhone 13 cuenta con una pantalla OLED de 6.1 pulgadas sin marco con una resolución de 2532 x 1170 píxeles a 460 ppi que te permite visualizar tus contenidos de forma más nítida y clara.',
        descripcionCorta: 'Tu nuevo superpoder. Una pantalla superbrillante en un diseño resistente...',
        precio: 470000,
        categoría: 'Celulares',
        imagen1: 'iphone-13',
        imagen2: 'iphone-13-2',
        imagen3: 'iphone-13-3',
        imagen4: 'iphone-13-4',
    },
    {
        id: 6,
        nombre: 'Samsung Galaxy A13',
        descripcion: 'El Samsung A13 es el celular ideal si estás buscando una buena resolución, una excelente cámara y, por supuesto, mucha memoria para una navegación más veloz. Imágenes de calidad para disfrutar con amigos: disfrutá sacando increíbles fotografías con la cámara Quad del Samsung A13, con una resolución de 50 mpx y Flash LED, además de su zoom digital 10x. Aprovechá todo el espacio disponible para tus apps: una de las características del Samsung A13 es su memoria interna de 128 GB, de las que quedan disponibles 105 GB para tu uso personal.',
        descripcionCorta: 'El Samsung A13 es el celular ideal si estás buscando una buena resolución, una...',
        precio: 72999,
        categoría: 'Celulares',
        imagen1: 'samsungA13',
        imagen2: 'samsungA13-2',
        imagen3: 'samsungA13-3',
        imagen4: 'samsungA13-4',
    },
    {
        id: 7,
        nombre: 'Notebook Dell Inspiron',
        descripcion: 'Creada para el presente, diseñada para el futuro. La notebook Dell Inspiron brinda a los usuarios sostenibilidad, rendimiento y comodidad. Cuenta con una Procesador AMD Ryzen 5 3450U Quad-Core, memoria RAM de 8 GB DDR4 y memoria de almacenamiento SSD M.2 NVMe de 256 GB. Con una pantalla LED de 15.6" con resolución HD (1366 x 768p) y gráficos AMD Radeon para imágenes nítidas y claras. Manténgase en contacto con compañeros de trabajo o clientes usando la cámara web, los parlantes y el micrófono integrado. Disponible con Windows 11 Home o Windows 11 Pro.',
        descripcionCorta: 'Creada para el presente, diseñada para el futuro. La notebook Dell Inspiron brinda...',
        precio: 227039,
        categoría: 'Notebooks',
        imagen1: 'dell-inspiron',
        imagen2: 'dell-inspiron-2',
        imagen3: 'dell-inspiron-3',
        imagen4: 'dell-inspiron-4',
    },
    {
        id: 8,
        nombre: 'Notebook Gamer Lenovo Legion',
        descripcion: 'La destreza que muestras, los enemigos que superas, los compañeros de equipo a los que inspiras, las cosas asombrosas que haces posible cuando juegas conducen directamente a las cosas increíbles que haces en la vida. Lenovo Legion lo celebra y sirve de conducto épico para unir ambos mundos: el inconteniblemente elegante y el indomablemente salvaje. Con núcleos verdaderamente revolucionarios en rendimiento y eficiencia, los procesadores Intel Core de 12va generación son ideales para streaming, edición, juegos y grabaciones. Un máximo nivel de potencia cuando más lo necesitas.',
        descripcionCorta: 'La destreza que muestras, los enemigos que superas, los compañeros de equip...',
        precio: 419999,
        categoría: 'Notebooks',
        imagen1: 'lenovo-legion',
        imagen2: 'lenovo-legion-2',
        imagen3: 'lenovo-legion-3',
        imagen4: 'lenovo-legion-4',
    },
    {
        id: 9,
        nombre: 'Notebook Gamer Dell G15',
        descripcion: 'El diseño térmico inspirado en Alienware ofrece una refrigeración óptima gracias a dos entradas de aire, palas de ventilador ultrafinas, conductos de cobre y cuatro rejillas de ventilación situadas estratégicamente. Por tanto, tu sistema se mantendrá frío en el fragor de la acción. Además, con procesadores hasta Intel i5 de 12 núcleos o i7 de 14 núcleos de 12.ª generación, así como perfiles de rendimiento optimizado, puedes disfrutar de una potencia y una coherencia de alto nivel durante cualquier experiencia de juego.',
        descripcionCorta: 'El diseño térmico inspirado en Alienware ofrece una refrigeración óptima gracias...',
        precio: 339999,
        categoría: 'Notebooks',
        imagen1: 'dell-g15',
        imagen2: 'dell-g15-2',
        imagen3: 'dell-g15-3',
        imagen4: 'dell-g15-4',
    },

]


/*Elementos HTML en los que se van a mostrar los productos dinámicamente*/
let contenedorProductos = document.getElementById('products');
let contenedorMain = document.getElementById('main');


/*Función para mostrar el catálogo de productos*/
const cargarProductos = function () {

    productos.forEach(producto => {

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
        spanCategoria.textContent = producto.categoría;

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
        buttonAgregarCarrito.classList.add("button", "main_cta");
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

    })

}

cargarProductos();



/*Función para cargar dinámicamente las ventanas modales de cada producto*/
const cargarVentanaModalProducto = function () {

    productos.forEach(producto => {

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
        galleryThumbnail1.classList.add("selected");
        galleryThumbnail1.setAttribute("src", `assets/imgs/${producto.imagen1}.jpg`);
        galleryThumbnail1.setAttribute("alt", producto.nombre);
        galleryThumbnail1.setAttribute('id', `${producto.id}-1`);

        let galleryThumbnail2 = document.createElement("img");
        galleryThumbnail2.setAttribute("src", `assets/imgs/${producto.imagen2}.jpg`);
        galleryThumbnail2.setAttribute("alt", producto.nombre);
        galleryThumbnail2.setAttribute('id', `${producto.id}-2`);

        let galleryThumbnail3 = document.createElement("img");
        galleryThumbnail3.setAttribute("src", `assets/imgs/${producto.imagen3}.jpg`);
        galleryThumbnail3.setAttribute("alt", producto.nombre);
        galleryThumbnail3.setAttribute('id', `${producto.id}-3`);

        let galleryThumbnail4 = document.createElement("img");
        galleryThumbnail4.setAttribute("src", `assets/imgs/${producto.imagen4}.jpg`);
        galleryThumbnail4.setAttribute("alt", producto.nombre);
        galleryThumbnail4.setAttribute('id', `${producto.id}-4`);

        let articleContent = document.createElement("article");
        articleContent.classList.add("content");

        let divDetails = document.createElement("div");
        divDetails.classList.add("details");

        let spanCategoriaModal = document.createElement("span");
        spanCategoriaModal.classList.add("subtitle", "margin-modal-subtitle");
        spanCategoriaModal.textContent = producto.categoría;

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
        inputNumber.setAttribute("value", "0");

        let spanInputPlus = document.createElement("span");
        spanInputPlus.classList.add("input-plus");
        spanInputPlus.textContent = "+";

        let buttonAgregarCarritoModal = document.createElement("button");
        buttonAgregarCarritoModal.classList.add("button", "main_cta", "cta_light-bg");
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


        /*let buttonMasInfoModal = document.getElementById(`info${producto.id}`);
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
        });*/


    })


}

cargarVentanaModalProducto();



/*Función para el correcto funcionamiento de las ventanas modales de cada producto*/
const mostrarVentanaModalProducto = function () {

    productos.forEach(producto => {

        let buttonMasInfoModal = document.getElementById(`info${producto.id}`);
        let modalConID = document.getElementById(`modal${producto.id}`);
        let spanCloseModal = document.getElementById(`cerrar${producto.id}`);

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

    })
}

mostrarVentanaModalProducto();



/*Carrito de compras*/
let headerCarrito = document.getElementById('header-cart');


/*Función para crear dinámicamente el carrito de compras*/
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
    spanSubtitulo.textContent = "0 items";

    let divProductsContainer = document.createElement("div");
    divProductsContainer.classList.add("products-container");

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

    headerCarrito.addEventListener("click", function () {
        divBgModalCarrito.style.display = "flex";
        setTimeout(() => {
            sectionCarrito.style.right = "0%";
        }, 10);
    });

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
}

cargarVentanaModalCarrito();