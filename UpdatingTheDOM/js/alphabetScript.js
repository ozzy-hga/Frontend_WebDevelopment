function scrambleText() {
    var inputValue = document.getElementById("randomWord").value;
    var scrambledTextOut = inputValue.split('').sort().join('');
    
    document.getElementById("randomWord").value = (scrambledTextOut);
    }

