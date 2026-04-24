PRUEBA DE PERFORMANCE – LOGIN API CON K6

Este proyecto implementa una prueba de carga sobre el endpoint de login de la API Demoblaze utilizando la herramienta K6. El objetivo principal es evaluar el comportamiento del sistema bajo condiciones de tráfico concurrente, validando su estabilidad, tiempos de respuesta y capacidad de procesamiento.

La prueba simula múltiples usuarios realizando solicitudes de autenticación de manera continua durante un periodo definido, permitiendo analizar cómo responde el servicio ante una carga constante.

Para la implementación se utilizó K6 como herramienta principal de pruebas de rendimiento, junto con JavaScript para la definición de los scripts. Adicionalmente, se emplea un archivo JSON para la gestión de datos de entrada, lo que permite simular diferentes usuarios y aplicar un enfoque de pruebas basado en datos. Para la generación de reportes se integró una herramienta que permite visualizar los resultados en formato HTML.

La estructura del proyecto está organizada de manera clara y modular. El directorio "scripts" contiene el archivo principal de la prueba, "data" almacena los usuarios utilizados en las solicitudes, "utils" incluye la configuración general como URL base, headers y parámetros de carga, y "reports" guarda los resultados generados tras la ejecución. En la raíz del proyecto se encuentran los archivos README.txt y conclusiones.txt, siendo este último fundamental para documentar los hallazgos de la prueba.

Para ejecutar la prueba, es necesario contar con K6 instalado en el sistema. Una vez instalado, se debe ubicar en la carpeta raíz del proyecto y ejecutar el comando correspondiente para iniciar la prueba. Al finalizar, se generan automáticamente los reportes que pueden ser abiertos en un navegador para su análisis.

La configuración de la prueba está basada en un modelo de carga constante, con una duración aproximada de cinco minutos, ejecutando alrededor de 20 iteraciones por segundo y utilizando un rango de usuarios virtuales entre 20 y 50. Esta configuración permite simular un escenario realista de uso del sistema.

Durante la ejecución, se validan aspectos clave como el código de respuesta HTTP y el tiempo de respuesta del servicio, asegurando que se mantenga dentro de límites aceptables. Estas validaciones permiten detectar posibles degradaciones en el rendimiento o comportamientos inesperados.

El archivo de conclusiones incluido en el proyecto contiene un análisis detallado de los resultados obtenidos, así como observaciones técnicas y recomendaciones de mejora. Este documento es clave para la evaluación del ejercicio, ya que evidencia la capacidad de interpretación de métricas y el criterio técnico aplicado.

En términos generales, este proyecto demuestra una implementación estructurada y funcional de pruebas de performance, aplicando buenas prácticas como el uso de datos externos, configuración modular y generación automática de reportes, lo cual facilita su mantenimiento, escalabilidad y comprensión por parte de otros evaluadores o equipos técnicos.
