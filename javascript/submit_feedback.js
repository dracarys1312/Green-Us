const scriptURL = 'https://script.google.com/macros/s/AKfycbwbfn2-Z-aZKOMsObksH-9cCG7CwAlMpOUFcn-Dv1VCAQc1arE6/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))
display_response(); 
})

function display_response(){
form.style.display = "none";
response.style.display = "block";
}