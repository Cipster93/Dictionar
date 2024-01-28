const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const savedWordsList = document.getElementById('savedWordsList');

const saveWords = [];

searchButton.addEventListener('click', function() {
  let flag = 0;
  const searchTerm = searchInput.value;
  const response = prompt("This word is not in the dictionary. If you want to save it, write 'yes'");
  if (response && response.toLowerCase() === 'yes') {
    for (let i = 0; i <= saveWords.length; ++i) {
      if (searchTerm === saveWords[i]) {
        flag = 1;
        break;
      }
    }
  }
  if (flag === 0) {
      saveWords.push(searchTerm);
      savedWordsList.innerHTML = "<li>" + saveWords.join('</li><li>') + "</li>";
  } else {
    alert("This word allready exist");
  }
});
