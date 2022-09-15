let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response1) => {
    return response1.json();
  })
  .then((res) => {
    for (let i = 0; i < 10; i++) {
      let user = res[i];
      console.log(user.id, user.name);
    }
  });

/* async function getName(url) {
  let data = await fetch(url);
  let data2 = await data.json();
  console.log(data2);
  for (let i = 0; i < 10; i++) {
    let emailName = data2[i];
    console.log(emailName.id, emailName.name);
  }
} */

/* getName("https://jsonplaceholder.typicode.com/users"); */
