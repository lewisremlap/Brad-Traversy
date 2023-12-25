//https://stackoverflow.com/questions/3582671/how-to-open-a-local-disk-file-with-javascript
function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var mStr;
    var contents = e.target.result;
    displayContents(contents);
    displayLink(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  // element.textContent = contents;

}

function displayLink(contents) {
    //document.getElementById('p').innerHTML = 'Paths with more than 240 characters: <br><ul>' + contents.split(',') + '</ul>';
    const myArray = contents.split('\n');
    console.log(myArray.length);
    console.log(myArray[0]);
    // p.innerText = 'Progress Steps';
    // p.innerHtml = myArray[0];
    let link = document.createElement("a")
    let txt = document.createTextNode("Progress Steps")
    link.appendChild(txt)
    link.title ="Progress Steps";
    // link.href = myArray[0];
    //https://stackoverflow.com/questions/42582982/how-to-create-target-blank-using-js-html-dom
    link.setAttribute('href', myArray[0]);
    //https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
    link.setAttribute('target', 'noreferrer noopener');
    let el = document.getElementById("p")
    el.appendChild(link)
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);
  
