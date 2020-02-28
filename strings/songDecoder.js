/*

Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

Examples
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND

*/

//  APPROACH 1: A good way to do this is to split the string by 'WUB' then filter by word and join by space
function songDecoder(str) {
    return str.split('WUB').filter((w) => w).join(" ");
}

// APPROACH 2: Loop through the string and check if it is the target then move the index+2, push currentWord and reset the currentWord = "" 
            //    otherwise just currentWord+= str[i]
function songDecoder1(str){
      let currentWord;
      let result = [];
    
      for(let i = 0; i < str.length; i++) {
        if(str[i] === "W" && str[i+1] === "U" && str[i+2] === "B") {
          i +=2;
          if(currentWord) result.push(currentWord);
          currentWord = "";
        }
        else {
          if(currentWord === undefined) currentWord = "";
          currentWord += str[i];
        }
      }
      if(currentWord) result.push(currentWord);
      return result.join(" ");
    }
    songDecoder("AWUBBWUBC"); // A B C
