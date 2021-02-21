const $detailsList = document.querySelectorAll('details')

$detailsList.forEach(($details) => {
    const detalle =  $details.querySelector('summary').addEventListener('click', expandir)
})

    function expandir() {
      $detailsList.forEach((detalle) =>
      {
        detalle.removeAttribute('open');     
      })
    }