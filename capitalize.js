// Capitalize the First Letter in the Sentence 

const test = "when we all Get to Heaven";

function textCase(set){
  let setArr = set.split(' ');
  let tArr = [ ];
  for (i=0; i < setArr.length; i++){
     tArr.push(setArr[i].charAt(0).toUpperCase().concat(setArr[i].slice(1)));
      console.log(tArr);
  }
//         console.log(tArr.join(' '));
}

textCase(test);







// USING REGEX
// let regex = /\b /g;
// let count = 0

// while(count !== test.length){
//     console.log(charAt(test.search(regex)));
//     count++
  
  
// }


//   if (test.match(regex)){
//   console.log(test.search(regex));
//     } else {
//       count = false;
//     }



// const capitalize = str => str.split(' ').map(cap => cap[0].toUpperCase() + cap.slice(1)).join(' ');
// capitalize(test);


// const capitalized = str => str.split(' ').reduce((cap, acc) => (cap[0].toUpperCase() + cap.slice(1)) + ` ${acc}`);
// capitalized(test);
