
const button = document.getElementById("convert-btn")

const convert = () => {
    const temperatureCelcius = Number(document.getElementById("temp-input").value)
    const select = document.getElementById("unit-select").value

    let result 
    let string = ""
    if(select === "fahrenheit"){
        result = (temperatureCelcius * (9/5)) + 32
        string = `°F`
    } else {
        result = temperatureCelcius + 273.15
        string = `K`
    }

    const p = document.getElementById("result")
    p.innerHTML = `Result : ${result} ${string} `

}

button.addEventListener("click", convert)


const select = document.getElementById("unit-select")
select.addEventListener("change", convert)