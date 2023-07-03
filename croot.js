var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  hasil = ""
  txt=""
  
  trtaabel =  `<tr class="hover:bg-gray-50">
  <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
  <div class="text-sm">
    <div class="font-medium text-gray-700">#crot#</div>
  </div>
  </th>
  </tr>`;
  
  
  fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15", requestOptions)
    .then(response => response.text())
    .then(result => tampilkan(result))
    .catch(error => console.log('error', error));
  
  function tampilkan(result){
    console.log(result)
    hasil=JSON.parse(result);
    // crot = trtaabel.replace("#text#", hasil.data[1].nome)
    txt = hasil.data.forEach(isiintabelnya);
  }
  
  function isiintabelnya(value){
    console.log(value)
    txt+= trtaabel.replace("#crot#", value.name)
    document.getElementById("konten").innerHTML=txt;
    return txt
  
  }