let button = document.querySelector('.btn')
button.addEventListener("click", ()=>{
    function generateRandomColor() {
        // Generate random values for red, green, and blue channels
        let randomNum = Math.floor(Math.random() * 16777216);

        // Convert the number to a hexadecimal string
        let hexColor = "#" + randomNum.toString(16).padStart(6, '0');
      
        return hexColor;
      }
     let color =  generateRandomColor()
     let colorHeading = document.querySelector('.colorcode')
      document.body.style.backgroundColor = color 
      document.body.style.backgroundImage = color 
      colorHeading.innerHTML = color
})