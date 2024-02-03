export default function validateForm() {
  const form = document.querySelector('#contact')
  
  form.addEventListener('change', handleChangeField)
  
  function handleChangeField(e) {
    const inputValue = e.target.value
    console.log(inputValue)
  }
}