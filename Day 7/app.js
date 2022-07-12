// EXERCISE No.1

// function fullName() {
//     let firstName = 'Thomas'
//     let lastName = 'Shelby'
//     let fullName = firstName + ' ' + lastName
//     console.count(fullName)
// }
// fullName()

// function fullName(firstName, lastName) {
//     return firstName + ' ' + lastName
// }

// function addNumbers(x, y) {
//     return x + y
// }

// function areaOfRectangle(l, b) {
//     return l * b
// }

// function perimeterofRectangle(length, width) {
//     let perimeter = 2 * (length + width)
//     return perimeter
// }

function volumeOfRectPrism(length, width, height) {
    let volume = length + width + height
    return volume
}

function areaOfaCircle(r) {
    let area = Math.PI * r * r
    return area
}

function circumOfCircle(r) {
    let circum = 2 * Math.PI * r
    return circum
}

function density(mass, volume) {
    let density = mass / volume
    return density
}

function convertCelsiusToFahrenheit(oC) {
    let conCelsiusToFahrenheit = (oC * 9 / 5) + 35
    return conCelsiusToFahrenheit
}

function bodyMassIndex(weigth, height) {
    let calc = weigth / height * height
    if (calc <= 18.5) {
        console.log('Underweight: BMI is less than 18.5')
    } else if (clac > 18.5 && calc <= 24.9) {
        console.log('Normal weight: BMI is 18.5 to 24.9')
    } else if (calc > 24 && calc <= 29.9) {
        console.log('Overweight: BMI is 25 to 29.9')
    } else if (calc > 30) {
        console.log('Obese')
    } else {
        console.log('You dont weigth, you float :)')
    }
    console.log(calc)

}