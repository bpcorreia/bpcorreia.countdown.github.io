function calcular() {
 
 let horafinal = document.querySelector('input#txthoras')  
 let minutofinal = document.querySelector('input#txtminutos')
 var res = document.getElementById('res')
 var res2 = document.getElementById('res2')
 var res3 = document.getElementById('res3')
 var now = new Date()
 let horaactual = now.getHours()
 let minsactuais = now.getMinutes()
    

//debugger

let hfinal = Number(horafinal.value)
let mfinal = Number(minutofinal.value)

if (hfinal.length  == 0 || hfinal < 0 || hfinal > 23 ) {
    window.alert("[ERROR] Check the data entered!")
}else
{  
 
 res2.innerHTML = ' '
 res3.innerHTML = ' '
 res.innerHTML = `
 Let's calculate the seconds left until ${hfinal}h${mfinal}m.<br>`
 res.innerHTML += ` It's now ${horaactual}h${minsactuais}m `

 if (hfinal < horaactual) {
    // window.alert(`Hora Final menor que hora actual`)
     let tempofalta = (24 - horaactual) + hfinal
     let secfalta = (tempofalta*60*60)
     res2.innerHTML += `Deadline: ${hfinal}h / Missing: ${tempofalta}h `
     res3.innerHTML += `Missing <strong> ${secfalta}s </strong>` 
 } else { 
    //window.alert(`Hora Final Maior que hora actual`)
    /*let tempofalta = (hfinal - horaactual)
      let secfalta = (tempofalta*60*60) */


    hMfinal = (hfinal * 60) + mfinal  //21h * 60m  horas finais em minutos
    horaMactual = (horaactual * 60) + minsactuais  // horas actual em minutos

    let tempofalta = (hMfinal - horaMactual)  // tempo em falta em minutos
    let secfalta = (tempofalta*60)  //tempo em falta em secs

    res2.innerHTML += `Deadline: ${hfinal}h${mfinal}m \u{1F449} Missing: ${tempofalta}m `
    res3.innerHTML += `Missing <strong> ${secfalta}s </strong>` 
 }
 //\u{1F59D}
}
    horafinal.focus()
}