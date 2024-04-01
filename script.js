const output = document.getElementById("output");
        const generateButton = document.getElementById("generateButton");
        const copyButton = document.getElementById("copyButton");
        const charInput = document.getElementById("charInput");
        const charCountDisplay = document.getElementById("charCountDisplay");
        const toggleNumbers = document.getElementById("toggleNumbers");
        const toggleUppercase = document.getElementById("toggleUppercase");
        const toggleLowercase = document.getElementById("toggleLowercase");
        const toggleCustomText = document.getElementById("toggleCustomText");
        const customTextInput = document.getElementById("customTextInput");

        generateButton.addEventListener("click", () => {
            const charCount = parseInt(document.getElementById("charCount").value);
            let characters = "";
            if (toggleNumbers.checked) characters += "0123456789";
            if (toggleUppercase.checked) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (toggleLowercase.checked) characters += "abcdefghijklmnopqrstuvwxyz";
            if (toggleCustomText.checked) characters += customTextInput.value; 
            if (!characters) {
                alert("Please enable at least one option.");
                return;
            }
            let result = "";
            for (let i = 0; i < charCount; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            output.textContent = result;
        });

        copyButton.addEventListener("click", () => {
            const textToCopy = output.textContent;
            const tempInput = document.createElement("input");
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            alert("Copied to clipboard!");
        });

        charInput.addEventListener("input", () => {
            const inputText = charInput.value;
            charCountDisplay.textContent = inputText.length;
        });

        toggleNumbers.addEventListener("change", () => {
            if (!toggleNumbers.checked && !toggleUppercase.checked && !toggleLowercase.checked && !toggleCustomText.checked) {
                toggleNumbers.checked = true; 
            }
        });

        toggleUppercase.addEventListener("change", () => {
            if (!toggleNumbers.checked && !toggleUppercase.checked && !toggleLowercase.checked && !toggleCustomText.checked) {
                toggleUppercase.checked = true; 
            }
        });

        toggleLowercase.addEventListener("change", () => {
            if (!toggleNumbers.checked && !toggleUppercase.checked && !toggleLowercase.checked && !toggleCustomText.checked) {
                toggleLowercase.checked = true;
            }
        });

        toggleCustomText.addEventListener("change", () => {
            if (!toggleNumbers.checked && !toggleUppercase.checked && !toggleLowercase.checked && !toggleCustomText.checked) {
                toggleCustomText.checked = true; 
            }
            customTextInput.disabled = !toggleCustomText.checked; 
        });