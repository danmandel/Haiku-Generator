var fs = require("fs");
var sourceText = readFile('./cmudict.txt');
var syllableObj = {};

function readFile(file){
  return fs.readFileSync(file).toString();
};

function addToObj(word,numSyllables){
    if (numSyllables){
        var numStr = numSyllables.toString();
            if (!this[numStr]){
                this[numStr] = [];
            }
        this[numStr].push(word);
    } else {console.log('no syllalbles for: '+word)}
    
};

function countSyllables(text){
    if (text.match(/\d/g)){
        return text.match(/\d/g).length;}
};

function formatData(data){
    var lines = data.toString().split("\n");
    for (var i=0;i<lines.length;i++){
        var lineSplit = lines[i].split("  ");
        var word = lineSplit[0];
        var phonemeSet = lineSplit[1];
        var numSyllables = countSyllables(phonemeSet);
      
        addToObj.apply(syllableObj,[word,numSyllables]);
    }
};

function createHaiku(arr,dict){
    var haiku = '';
    var haikuArr = [];
    for (var i=0;i<arr.length;i++){
        var syllablesNeeded = arr[i]
        var word = dict[syllablesNeeded][Math.floor(Math.random() * dict[syllablesNeeded].length)];
        haikuArr.push(word);
        haikuArr.push('\n')
    }
    haiku = haikuArr.join(' ')
    return haiku
}

formatData(sourceText);

console.log(createHaiku([5,7,5], syllableObj));
