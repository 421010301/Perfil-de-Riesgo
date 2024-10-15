import React from 'react';

const TextoInversionistaSofisticado = () => {
    return (
        <div className="container mt-5">
            <h3 className="mb-4 text-center text-primary">INVERSIONISTA SOFISTICADO</h3>
            <p className="lead text-justify">
                Personas físicas o morales cuyo patrimonio sea superior a un millón de dólares o su equivalente;
                o cuyos ingresos anuales sean superiores a ciento cincuenta mil dólares o su equivalente; o la persona física que
                cuente con conocimientos suficientes para evaluar y aceptar los riesgos de su inversión.
            </p>
            <p className="text-justify">
                Si el inversionista manifiesta que tiene la capacidad suficiente para asumir los riesgos
                de las inversiones en el Mercado de Valores bajo el <strong>PERFIL SOFISTICADO</strong>, además de la información
                que la institución financiera le solicite, deberá manifestar expresamente que cumple al menos con los siguientes criterios:
            </p>
            <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">Tener conocimiento y experiencia sobre los mercados en los que va a invertir.</li>
                <li className="list-group-item">Es capaz de valorar los riesgos y resultados de la inversión.</li>
                <li className="list-group-item">Es financieramente capaz de asumir los riesgos de la inversión.</li>
            </ul>
            <p className="text-justify">
                Todo inversionista sofisticado deberá manifestar expresamente que es capaz de protegerse a sí mismo; y por lo tanto,
                la institución solo está obligada a proporcionarle información sobre los riesgos y restricciones de la inversión solicitada.
            </p>
            <p className="text-justify">
                Además, hacemos de su conocimiento lo dispuesto en la <strong>&apos;Ley del Mercado de Valores&apos;</strong>, Sección III relativa
                a las <strong>&apos;Prácticas de Venta&apos;</strong>, artículos 188 y 190, que se citan a continuación:
            </p>

            <h5 className="mt-4 text-info">Artículo 188:</h5>
            <p className="text-justify">
                Las casas de bolsa, en el manejo de las cuentas de sus clientes, deberán actuar profesionalmente
                y tendrán prohibido:
            </p>
            <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">Celebrar operaciones con valores cuya cotización se encuentre suspendida.</li>
                <li className="list-group-item">
                    Garantizar, directa o indirectamente, rendimientos; asumir la obligación de devolver la suerte principal
                    de los recursos que les hayan sido entregados para la celebración de operaciones con valores, salvo tratándose
                    de reportos o préstamos de valores; responsabilizarse de las pérdidas que puedan sufrir sus clientes como
                    consecuencia de dichas operaciones, o en cualquier forma asumir el riesgo de las variaciones en el diferencial
                    del precio o tasa a favor de sus clientes.
                </li>
            </ul>

            <h5 className="mt-4 text-info">Artículo 190:</h5>
            <p className="text-justify">
                Las casas de bolsa que reciban instrucciones de clientes o realicen operaciones por cuenta de estos,
                deberán contar con lineamientos y políticas para identificar y conocer a sus clientes, así como determinar
                sus objetivos de inversión. Las casas de bolsa también deberán proporcionar a su clientela la información
                necesaria para tomar decisiones de inversión, ajustándose a los perfiles que definan al efecto, conforme
                a las disposiciones de carácter general que expida la Comisión.
            </p>
            <p className="text-justify">
                Al operar, las casas de bolsa se ajustarán al perfil que corresponda al cliente.
            </p>
            <p className="text-justify">
                Cuando se contraten operaciones y servicios sobre valores que no sean acordes con el perfil del cliente, deberá
                contarse con el consentimiento expreso del mismo. Las casas de bolsa serán responsables de los daños y perjuicios
                ocasionados al cliente por el incumplimiento de lo previsto en este párrafo.
            </p>
        </div>
    );
};

export default TextoInversionistaSofisticado;
