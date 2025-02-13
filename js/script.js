function convertTemperature() {
    let temp = parseFloat(document.getElementById("temperature").value);
    let scale = document.getElementById("scale").value;
    let celsius, fahrenheit, kelvin, reamur;
    let explanation = "";
    
    if (!isNaN(temp)) {
        switch (scale) {
            case "celsius":
                celsius = temp;
                fahrenheit = (temp * 9/5) + 32;
                kelvin = temp + 273.15;
                reamur = temp * 4/5;
                explanation = `Konversi dari ${temp} °C:
                
                Fahrenheit:
                Rumus: F = (C × 9/5) + 32
                Cara:
                1. Kalikan suhu dalam Celsius dengan 9/5.
                2. Tambahkan hasilnya dengan 32.
                Hasil: ${fahrenheit.toFixed(2)} °F

                Kelvin:
                Rumus: K = C + 273.15
                Cara:
                1. Tambahkan suhu dalam Celsius dengan 273.15.
                Hasil: ${kelvin.toFixed(2)} K

                Reamur:
                Rumus: R = C × 4/5
                Cara:
                1. Kalikan suhu dalam Celsius dengan 4/5.
                Hasil: ${reamur.toFixed(2)} °R`;
                break;
            case "fahrenheit":
                celsius = (temp - 32) * 5/9;
                fahrenheit = temp;
                kelvin = celsius + 273.15;
                reamur = celsius * 4/5;
                explanation = `Konversi dari ${temp} °F:

                Celsius:
                Rumus: C = (F - 32) × 5/9
                Cara:
                1. Kurangkan suhu dalam Fahrenheit dengan 32.
                2. Kalikan hasilnya dengan 5/9.
                Hasil: ${celsius.toFixed(2)} °C
                
                Kelvin:
                Rumus: K = C + 273.15
                Cara:
                1. Tambahkan suhu dalam Celsius dengan 273.15.
                Hasil: ${kelvin.toFixed(2)} K
                
                Reamur:
                Rumus: R = C × 4/5
                Cara:
                1. Kalikan suhu dalam Celsius dengan 4/5.
                Hasil: ${reamur.toFixed(2)} °R`;
                break;
            case "kelvin":
                celsius = temp - 273.15;
                fahrenheit = (celsius * 9/5) + 32;
                kelvin = temp;
                reamur = celsius * 4/5;
                explanation = `Konversi dari ${temp} K:

                Celsius:
                Rumus: C = K - 273.15
                Cara:
                1. Kurangkan suhu dalam Kelvin dengan 273.15.
                Hasil: ${celsius.toFixed(2)} °C
                
                Fahrenheit:
                Rumus: F = (C × 9/5) + 32
                Cara:
                1. Kalikan suhu dalam Celsius dengan 9/5.
                2. Tambahkan hasilnya dengan 32.
                Hasil: ${fahrenheit.toFixed(2)} °F
                
                Reamur:
                Rumus: R = C × 4/5
                Cara:
                1. Kalikan suhu dalam Celsius dengan 4/5.
                Hasil: ${reamur.toFixed(2)} °R`;
                break;
            case "reamur":
                celsius = temp * 5/4;
                fahrenheit = (celsius * 9/5) + 32;
                kelvin = celsius + 273.15;
                reamur = temp;
                explanation = `Konversi dari ${temp} °R:

                Celsius:
                Rumus: C = R × 5/4
                Cara:
                1. Kalikan suhu dalam Reamur dengan 5/4.
                Hasil: ${celsius.toFixed(2)} °C

                Fahrenheit:
                Rumus: F = (C × 9/5) + 32
                Cara:
                1. Kalikan suhu dalam Celsius dengan 9/5.
                2. Tambahkan hasilnya dengan 32.
                Hasil: ${fahrenheit.toFixed(2)} °F

                Kelvin:
                Rumus: K = C + 273.15
                Cara:
                1. Tambahkan suhu dalam Celsius dengan 273.15.
                Hasil: ${kelvin.toFixed(2)} K`;
                break;
        }
        document.getElementById("celsius").textContent = celsius.toFixed(2) + " °C";
        document.getElementById("fahrenheit").textContent = fahrenheit.toFixed(2) + " °F";
        document.getElementById("kelvin").textContent = kelvin.toFixed(2) + " K";
        document.getElementById("reamur").textContent = reamur.toFixed(2) + " °R";
    } else {
        explanation = "Masukkan suhu yang valid.";
    }
    document.getElementById("explanation").textContent = explanation;
}