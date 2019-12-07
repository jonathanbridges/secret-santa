let restricted = {
  "Boris": "Ida",
  "Ida": "Boris",
  "Vladimir": "Vera",
  "Vera": "Vladimir",
  "Leo": "Sophia",
  "Sophia": "Leo",
  "Fyodor": "Anna",
  "Anna": "Fyodor",
  "Mikhail": "Elena",
  "Elena": "Mikhail",
  "Anton": "Olga",
  "Olga": "Anton",
};

let family = [
  "Ida",
  "Boris",
  "Mikhail",
  "Elena",
  "Sophia",
  "Leo",
  "Anton",
  "Olga",
  "Nicole",
  "Jc",
  "Fyodor",
  "Anna",
  "Vladimir",
  "Vera"
];

const christmasNames = () => {

  let namesInHat = family.slice(0);
  let christmasNames = [];
  let randomNumber;

  const drawName = (chooser) => {
    randomNumber = Math.floor(Math.random() * ((namesInHat.length - 1) - 0 + 1)) + 0;
    let name = namesInHat.splice(randomNumber, 1);
    console.log(`${chooser} drew ${name}.`)
    return name;
  }

  const putNameBack = (name) => {
    namesInHat.push(name);
  }

  const restart = () => {
    namesInHat = family.slice(0);
    christmasNames = [];
    i = 0;
  }

  let i = 0;
  console.log("Beep Boop Borp. Commencing name draw:");
  console.log("---------------------");
  while (namesInHat.length) {
    let chooser = family[i];
    let pickedName = drawName(chooser);

    // If the person drawing is the last to pick, and picks their partner or themselves, restart
    if (!namesInHat.length && pickedName == chooser || !namesInHat.length && pickedName == restricted[chooser]) {
      console.log("The last person to draw drew themselves or their significant other! Starting over...");
      restart();
      continue;
    }

    // If the person drawing the name picks themselves, put the name back and pick again
    while (chooser == pickedName) {
      console.log(`${chooser} drew their own name. Putting name back in hat.`);
      putNameBack(pickedName);
      pickedName = drawName(chooser);
    }

    // If the person drawing picks their partner, pick another name
    while (pickedName == restricted[chooser]) {
      console.log(`${chooser} picked ${pickedName}, their significant other. Putting name back in hat.`);
      putNameBack(pickedName);
      pickedName = drawName(chooser);
    }

    christmasNames.push(`${chooser} - ${pickedName}`);
    i++;
  }

  console.log("---------------------")
  console.log("Happy Holidays! The list this year is:");
  christmasNames.forEach(selection => console.log(selection));
  console.log("---------------------");
  return "Yuletide";
}

console.log(christmasNames(family, restricted));