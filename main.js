let request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if(request.readyState === 4 && request.status === 200){
    document.getElementById('output').innerText = request.responseText;
  }
  if(request.status === 404){
    console.log("file not found")
  }
}
request.open('GET','plaintext.txt',true);
request.send();
