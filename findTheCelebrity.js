/*
Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.

Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n), your function should minimize the number of calls to knows.

Note: There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.

    input = [a,b,c,d,e];
    CONSTRAINS:
        Everyone should know the Suspect but suspect shouldn't know any one  if true return suspect

        But if: 
        Everyone knows someone else, return -1;
        No one knows each other, return -1;
        One doesn't know anyone, every one else knows someone but not necessarily him, return -1;
        Everyone knows him but he also knows someone, return -1;
           
            PSUEDO CODE: 
        - set suspect = 0;
        - loop through i = 1 to n
            if(knows(suspect, i)) then suspect = i  because suspect must don't know anyone
        
        - Double check if suspect doesn't know anyone and everyone knows him
            - loop through i = 0 to n
                if(suspect != i && knows(suspect, i) || !knows(i, suspect) ) return -1
        - if nothing is return then return suspect because everyone knows him but he doesn't know anyone

*/
function findCelebrity(n) {
    let suspect = 0;

    for (let i = 1; i < n; i++) {
        // suspect shouldn't know anyone, if he knows i, set i as a suspect
        if (knows(suspect, i)) suspect = i;
    }

    for (let i = 0; i < n; i++) {
        // suspect has been good so far but double check if suspect is not himself, or knows someone or i knows him
        if (suspect !== i && knows(suspect, i) || !knows(i, suspect)) {
            return -1;
        }
    }
    return suspect;
}