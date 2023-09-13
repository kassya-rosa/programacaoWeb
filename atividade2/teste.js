
// usando callbacks

function successCallback(result) {
  console.log("It succeeded with " + result);
}

function failureCallback(error) {
  console.log("It failed with " + error);
}

doSomething(successCallback, failureCallback);

// usando promise

doSomething().then(successCallback, failureCallback);


new Promise((resolve, reject) => {
  console.log("Início");

  resolve();
})
  .then(() => {
    throw new Error("Falha");

    console.log("Faça isso");
  })
  .catch(() => {
    console.log("Faça aquilo");
  })
  .then(() => {
    console.log("Faça isso não importa o que aconteça");
  });

  
