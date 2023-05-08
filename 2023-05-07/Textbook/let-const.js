function example() {
  var x = 1;
  let y = 2;
  const z = 3;

  if (true) {
    var x = 4; // redeclared and reassigned
    let y = 5; // block-scoped
    const z = 6; // block-scoped

    console.log(x); // 4
    console.log(y); // 5
    console.log(z); // 6
  }

  console.log(x); // 4
  console.log(y); // 2
  console.log(z); // 3
}

example();
