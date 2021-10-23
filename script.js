const $lis = document.querySelectorAll("ul button")

// Adding an event listener to each node (to each button - what happens when you click it).
$lis.forEach((node) => {
    node.addEventListener('click', function(event) {
        const value = node.innerText.trim()                 //In case there are extra spaces there then trim will take it out for us.
        const $result = document.querySelector(".result")  //The $ sign means that we are grabbing something from the document object model.
        const resultText = $result.innerText.trim()

        if(resultText == '0' || resultText == 'undefined' || resultText == 'Infinity') {
            $result.innerText = ''
        }

        if(value == '=') {
            let solution = eval(resultText)   //The eval() function evaluates JavaScript code represented as a string!
            $result.innerText = solution
            return true
        }

        if(value.toLowerCase() == 'c') {
            $result.innerText = ''
            return true
        }

        $result.append(value)
    })
})
