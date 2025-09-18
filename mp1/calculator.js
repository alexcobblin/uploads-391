
    function addition() {
        const x = parseFloat(document.getElementById("first-number").value);
        const y = parseFloat(document.getElementById("second-number").value);
        const result = x + y;
        displayResult(result);
    }

    function subtraction() {
        const x = parseFloat(document.getElementById("first-number").value);
        const y = parseFloat(document.getElementById("second-number").value);
        const result = x - y;
        displayResult(result);
    }

    function multiplication() {
        const x = parseFloat(document.getElementById("first-number").value);
        const y = parseFloat(document.getElementById("second-number").value);
        const result = x * y;
        displayResult(result);
    }

    function division() {
        const x = parseFloat(document.getElementById("first-number").value);
        const y = parseFloat(document.getElementById("second-number").value);
        const result = x / y;
        displayResult(result);
    }

    function power() {
        const base = parseFloat(document.getElementById("first-number").value);
        const exponent = parseFloat(document.getElementById("second-number").value);
        let result = 1;
        if (exponent < 0) {
            exponent2 = exponent * -1;
        }
        
        for (let i = 0; i < exponent2; i++) {
            result *= base;
        }
        if (exponent < 0) {
            result = 1 / result;
        }
        
        displayResult(result);
    }

    function clear() {
        document.getElementById("first-number").value = "";
        document.getElementById("second-number").value = "";
        document.getElementById("output").innerHTML = "Result";
        document.getElementById("output").style.color = "#233";
        document.getElementById("output").style.backgroundColor = "transparent";
    }
    function displayResult(result) {
        const outputElement = document.getElementById("output");
        console.log("Displaying result:", result);
        outputElement.innerHTML = String(result);
        
        if (result < 0) {
            outputElement.style.color = "red !important";
        } else {
            outputElement.style.color = "#333 !important";
        }
    }