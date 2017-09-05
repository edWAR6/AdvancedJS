function getJSON(url, done){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    done(this.responseText);
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getContents(url, done){
  getJSON(url, data =>{
    done(JSON.parse(data));
  })
}
