const textInput = document.getElementById('text-input'); 
const checkBtn = document.getElementById('check-btn'); 
const result = document.getElementById('result'); 


const cleanValues = () => {
    const unwanted = /[,\.\_\-\(\)\/\s\+\\]/gi;
    const valueStr = textInput.value.replace(unwanted, '').toLowerCase();
       
    const valueArr = [];
    for (let i = 0; i < valueStr.length; i++) {
        valueArr.push(valueStr[i]);
    }

    const reversedValueArr = [...valueArr].reverse(); 

    if (valueArr.join('') === reversedValueArr.join('')) {
       return `${textInput.value} is a Palindrome`
    } else {
        return `${textInput.value} is not a Palindrome`
    };

};

const finalValues = () => {
    result.textContent = cleanValues()
  };



checkBtn.addEventListener('click', () => {
    if (textInput.value) {
        finalValues()
    } else {
        alert('Please input a value')
    }
});