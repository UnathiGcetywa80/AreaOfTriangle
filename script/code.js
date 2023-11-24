function calculateArea() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    if (!isNaN(base) && !isNaN(height)) {
      const area = 0.5 * base * height;
  
      document.getElementById('result').innerHTML = `The area of the triangle is: ${area}`;
    } else {
      document.getElementById('result').innerHTML = 'Enter numbers for base and height.';
    }
  }
  