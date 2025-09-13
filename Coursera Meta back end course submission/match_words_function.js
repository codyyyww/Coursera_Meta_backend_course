var j=0;
function letterFinder(word,match)
{for(let i=0;i<word.length;i++){
if(word[i]===match){console.log('Found the', match, 'at', i)
j=j+1;}
else if( word[i] !== match){console.log('---No match found at', i)}}
function counter(){if(j==1||j==0){var plural="match"}
else{var plural="matchs"}
console.log(j,plural,"found")}
counter();}

letterFinder("move","t");
