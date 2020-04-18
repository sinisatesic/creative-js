

 for(let i = 0; i < 100; i++){

    if ( i === 20) {
        console.log('ya hit da 20');
        continue;   //skipping over 20
    }

    console.log(i); //this needs to be placed here for above to work as intended
}

 //

 for(let i = 0; i < 100; i++){

     if ( i === 40) {
         console.log('ya hit da 40');
         break;   //stopping at 40
     }

     console.log(i); //this needs to be placed here for above to work as intended
 }

 //

 const texts = ['Singing in the park', 'dancing around', 'blork'];

 for (let i = 1; i <= texts.length; i++){
     console.log(i);
 }

 //

 for (let i = 0; i < texts.length; i++){
     console.log(texts[i]);
 }

 //

 const singleWord = 'blark'

 for (let i = 0; i < singleWord.length; i++){
     console.log(i);
     console.log(singleWord[i]);
 }
