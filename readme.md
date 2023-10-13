#TITULO Agregado de Formularios de Registracion y Login

#BREVE DESCRIPCION

#En el presente desafio del curso de Coder House podemos ver como al proyecto de ecomerce, comenzamos a implementar junto a mongoDB cookies, formularios de registracion, log out y login.
Para el presente desafio debimos instalar las dependencias npm cookies-parser & npm login-store

#Agregamos Hasheo de contraseñas y passport register y passport login, para dichas implementaciones modificamos los siguientes las siguientes carpetas: 
    1- en la carpeta src agregamos los archivos passport-config y constant, 
    2-en el archivo de rotes modificamos el sessions.router.js, 
    3-dentro de DAO agregamos en mongomanager el archivo sessionmanager y en models el user.models, 
    4- dentro de controller se modifico el session.controller.

#Para la segunda practica integradora refactorice el codigo luego de hacer pruebas opte por seguir con el metodo session. Modificamos el archivo userModel para poder crear un carrito para los usuarios que se registren, ademas de que se vio modificada la ruta api/session ya que le agregamos un current para poder obtener informacion sobre el usuario que este logeado en ese momento.

#Continuamos desarrollando el proyecto y aplicamos la arquitectura por capas para crear un codigo mas prolijo y legible ademas de separar bien las responsabilidades de cada archivo y que no se superpongan. Instalamos el dotenv y creamos la capa de service dentro de la arquitectura para los usuarios y para los productos.

#Cerramos el segundo modulo del curso de Backend realizando la tercer pre entrega del proyecto final, en la misma deberemos terminar con las capas de arquitectura del proyecto, agregaremos un archivo DTOs, permisos de administrador y de usuario mediante la implementacion de Midlewares ademas ya pefeccionaremos el cart para que nos empiece a descontar el stock de nuestra base de datos y podremos emitir un ticket para el usuario crando el modelo y haciendo que Mongo nos genere un id para cada ticket

#Encaramos el tercer modulo del curso implementando un modulo de mocking donde obtenemos 100 productos, ademas de agregar el manejo de errores donde se creo un midleware de errores, un diccionario un archivo en el utils que nos crea el mensaje correspondiente al error que surja en la app.

#Actualizamos el repo creando un sistema de logger con winston y una escala de niveles de errores con sus respectivos coleres, tambien creamos un endopitn de test para testear los loggers y cambiamos los console.log del cart controller y del view session por loggers.

#Encarando el proyecto para la tercer practica integradora nos tomamos un tiempo para restructurar y corregir errores del codigo y crear el service mailing y el factory, tambien adaptamos el products model schema y le agrefamos un campo owner que nos permita identificar si el usuario que creo un producto es rol admin o rol premium. Refactorizamos los middlewares para otorgar ciertos permisos al usuario premiom como tambien restricciones ya se no agregar al carrito los productos que el mismo creo.

#Documentamos el products y los carts en archivos .yml para ir puliendo el proyecto ya en la recta final de la cursada.

#Agregamos multer al proyecto y una logica que se implemento en la ruta de updateRole para que al querer cambiar el rol de user a Premium nos permita hacerlo mediante la subida de archivos solicitados que realizaremos con multer. Tambien comenzamos a agregar middlewares de autorizacion a ciertas rutas para que la app sea mas segura y comenzamos a desarrollar y pulir el proyecto final.


#AGRADECIMIENTO:

Quiero expresar y resaltar mi más sincero agradecimiento al profesor Guillermo Fregnani y a mi tutora Laura Acuña por su dedicación y esfuerzo en esta cursada. Su compromiso con nuestra formación fue evidente en cada clase, donde compartieron sus conocimientos con paciencia y claridad. Gracias a su guía, pudimos comprender conceptos complejos y aplicarlos en la creación del proyecto "E-commerce". Su apoyo ha sido invaluable y estoy agradecido por la oportunidad de aprender de profesionales tan dedicados.

Cordial y afectuoso saludo!