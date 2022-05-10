function calculateAverage(){
    const userNum = parseInt(document.getElementById('user-number').value)
    console.log(userNum)
    const noteList = [];

    let sum = 0

    for (let index = 0; index < userNum; index++) {
        const notes = prompt(`Escriba la ${index+1}º nota`)
        
        if(notes < 0 || notes > 10) {
            alert('Nota fuera de rango. Ingrese una nota del 1 al 10')
            return
        }

        noteList.push(notes)
        sum += Number(noteList[index])
        console.log(sum)
    }
    
    averageNote = parseInt(sum / userNum)
    console.log(averageNote)

    let result
    if(averageNote < 5) {
       result = `La nota media de la clase está suspendida ||${averageNote}||. Los alumnos deberían preguntar sus dudas y trabajar más.`
    }
    if(averageNote >= 5 && averageNote < 7) {
        result = `La nota media de la clase es buena ||${averageNote}||, pero los alumnos deberían mejorar su trabajo personal.`
    }
    if(averageNote >= 7) {
        result = `¡Enhorabuena! La nota media de la clase se corresponde con el esfuerzo realizado ||${averageNote}||`
    }

    document.getElementById('result').innerHTML = result


}