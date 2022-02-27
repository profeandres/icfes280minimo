import React,{useEffect,useState} from 'react';
import '../styles/Inicio.css'

export const Inicio = () => {
  const [date,setDate]=useState({
    seg:0,
    min:0,
    hora:0,
    dia:0,
    mes:0
  });
  useEffect(() => {
    function actualizar(){
      const diaprueba= new Date(2022,8,3,12,12,12);
      let fecha= new Date(diaprueba - Date.now())
      let newfecha={
        seg: fecha.getSeconds(),
        min: fecha.getMinutes(),
        hora: fecha.getHours(),
        dia: fecha.getDate(),
        mes: fecha.getMonth()
      }
      setDate(newfecha)
      console.log();
    }
    setInterval(actualizar,1000)
  },[])
  
  return (
    <div className='inicio'>
      <div className='cuentaReg'>
        <h1>PRUEBAS ICFES 2022</h1>
        <h2>Faltan</h2>
        {date.mes>1 && <h3>{date.mes} meses</h3>}
        {date.mes===1 && <h3>{date.mes} mes</h3>}
        
        <h3>{date.dia} días</h3>
        <h3>{date.hora} h</h3>
        <h3>{date.min} min</h3>
        <h3>{date.seg} seg</h3>
      </div>
      
      <h1>¿De qué trata esto?</h1>
      <p>Hola, te doy la bienvenida a este proyecto llamado <span className='logo'>ICFES 280 MINIMO</span> donde básicamente podrás practicar pequeños simulacros tipos icfes de 10 preguntas hasta 20 preguntas, medir tu tiempo, reconocer tus fallas y potenciar tus fortalezas.</p>

      <p>No es imposible conseguir esos puntajes que necesitas por tanto te animo a que no desmayes y continues por ti mismo, por ese sueño que tienes y que seguramente para conseguir debes estudiar, obtener un excelente puntaje ICFES, ¿y porque no? una beca en una universidad de prestigio nacional (o internacional), espero que esta página sea de utilidad para ti. Gracias por visitar</p>

      <p>Att, Prof. Andrés Cantillo</p>

      <h1>Si, si, muy bonito todo pero... ¿cómo empiezo?</h1>
      <p>Primero, debes tener aproximadamente entre 20minutos y 40minutos libres de distracciones, mandados a la tienda, series de netflix, facebook, whatsapp, amigos, etc</p>

      <p>Segundo, debes tener a la mano lapiz y papel, para ir realizando las operaciones que necesites según las preguntas y sea más facil contestar</p>

      <p>Tercero, darle click al botón simulacros, escoger el tema de tu preferencia, darle al botón comenzar y listo. Pruebate a ti mismo para ver como te va. Puedes hacerlo cuantas veces quieras y lo mejor la prueba te medirá tu tiempo y te dirá en qué fallaste... pero... ¡hay más! también te mostrará un video de youtube donde una persona experta resolverá aquellas preguntas en las que hallas fallado, la proxima vez que lo resuelvas ya lo dominarás.</p>

      <p>Cuarto, ¿aún aquí? ¡pilas! empieza tu primer simulacro y te deseo mucha suerte, Dios te bendiga y te dé mucha sabiduría</p>
    </div>
  )
}
