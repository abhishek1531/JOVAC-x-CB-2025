// getting data from github
fetch("https://api.github.com/users/abhishek1531") 
.then(function(res) {
  return res.json(); 
})
.then(function(data) {
  // showing data in HTML
  let box = document.getElementById("info-box");

  box.innerHTML = `
    <img src="${data.avatar_url}" />
    <h3>${data.name}</h3>
    <p>${data.bio}</p>
    <a href="${data.html_url}" target="_blank">GitHub Profile</a>
  `;
})
.catch(function(err) {
  console.log("Something went wrong:", err);
});
