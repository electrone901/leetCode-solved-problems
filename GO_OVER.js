function minWindow(searchString, t) {

  let requiredCharacters = {}; //put t
  let windowCharacterMapping = {};

  let left = 0;
  let right = 0;
  let totalCharFrequenciesToMatch = Object.keys(requiredCharacters);
  let charFrequenciesInWindowThatMatch = 0;

  
  let minWindowLengthSeenSoFar = Infinity;
  let minWindow = "";

  while (right < searchString.length) {
    let characterAtRightPointer = searchString.charAt(right);
    addCharacterToHashtableMapping(windowCharacterMapping, characterAtRightPointer);
    
    // Is this character part of the requirement?
    let rightCharIsARequirement = requiredCharacters.containsKey(characterAtRightPointer);
    if (rightCharIsARequirement) {
        // Does the current window frequency match the required frequency?
        let requirementForCharacterMet = 
        requiredCharacters.get(characterAtRightPointer).intValue() ==
        windowCharacterMapping.get(characterAtRightPointer).intValue();


      if (requirementForCharacterMet) {
        /*
          If so then we have one more frequency requirement that matches...remember when:
          'totalCharFrequenciesToMatch' == 'charFrequenciesInWindowThatMatch' then we know that
          we have a satisfying window
        */
        charFrequenciesInWindowThatMatch++;
      }
    }
    
    /*
      Does this window satisfy? Ok...if it does try contracting the left pointer inward until
      we go over the right pointer.
    */
    while (charFrequenciesInWindowThatMatch == totalCharFrequenciesToMatch && left <= right) {

      /*
        Put these things in plain English so you don't get confused
      */
      char characterAtLeftPointer = searchString.charAt(left);
      int windowSize = right - left + 1;

    //   windowSize < minWindowLengthSeenSoFar then update it
      if (windowSize < minWindowLengthSeenSoFar) {
        minWindowLengthSeenSoFar = windowSize;
        minWindow = searchString.substring(left, right + 1);
      }
      
      //This character will get contracted out. It won't be in the window anymore onceleft moves forward.
      windowCharacterMapping.put(characterAtLeftPointer, windowCharacterMapping.get(characterAtLeftPointer) - 1);

    //Was this character part of the requirement? If so then its frequency changing matters to us.

      boolean leftCharIsARequirement = requiredCharacters.containsKey(characterAtLeftPointer);
      if (leftCharIsARequirement) {
        /*
          Does the character frequence count not fall below the threshold of satisfying?
        */
        boolean characterFailsRequirement = windowCharacterMapping.get(characterAtLeftPointer).intValue() <
                                            requiredCharacters.get(characterAtLeftPointer).intValue();

        if (characterFailsRequirement) {
          /*
            If so then we have one less character frequency mapping in the window that matches
          */
          charFrequenciesInWindowThatMatch--;
        }
      }

      /*
        Move the left point forward. We will keep going until the window no longer satisfies.
      */
      left++;
    }

    /*
      We have moved left as far as it could go. It either led to a window that no longer
      satisfied or left passed the right pointer. Either way...advance the right pointer.
    */
    right++;
  }
  
  return minWindow;
}

private Map<Character, Integer> buildMappingOfCharactersToOccurrences(String s) {

  Map<Character, Integer> map = new HashMap<Character, Integer>();

  for (int i = 0; i < s.length(); i++) {
    int occurrencesOfCharacter = map.getOrDefault(s.charAt(i), 0);
    map.put(s.charAt(i), occurrencesOfCharacter + 1);
  }

  return map;
}

private void addCharacterToHashtableMapping(Map<Character, Integer> map, Character c) {
  int occurrences = map.getOrDefault(c, 0);
  map.put(c, occurrences + 1);
}


////
'''
buidling a graph of source + words
start with source
traverse words and add them to graph, and remove from words

abc -> abd
ebd -> abd/   abd -> ebd


doing BFS on the graph and once target is found

current_height = 0, node = source
current_heigh = 1

return current_height + 1
'''
from collections import deque

def diff(str1, str2):
  total_diff = 0
  if str1 == str2:
    return total_diff
  
  diff_length_strings = abs(len(str1) - len(str2))
  if diff_length_strings > 1:
    return diff_length_strings
  
  if len(str1) > len(str2):
    max_str = str1
    min_str = str2
  else:
    max_str = str2
    min_str = str1
    
  max_str_len = len(max_str)
  min_str_len = len(min_str)
  
  max_str_idx = 0
  min_str_idx = 0
  
  is_skip = True
    
  if diff_length_strings == 1:
    while max_str_idx < max_str_len and min_str_idx < min_str_len:
      if max_str[max_str_idx] != min_str[min_str_idx]:
        total_diff += 1
        if is_skip:
          max_str_idx += 1
          continue
      
      max_str_idx += 1
      min_str_idx += 1
    if  max_str_idx < max_str_len:
      return 1
    return total_diff
  
  for i in range(len(str1)):
    if str1[i] != str2[i]:
      total_diff += 1
      
  return total_diff

def shortestWordEditPath(source, target, words):
	# pushing strings from `words` and integers specifying the start of height of new level in the graph
  if source == target:
    return 0
  
  if len(source) != len(target):
    return -1
  
  current_h = 0
  q = deque([current_h, source])
  
  while q:
    current_node = q.popleft()
    
    if type(current_node) == int:
      current_h = current_node
      if not q:
        break
      q.append(current_h+1)
    else:
      for word in words:
        if diff(word, current_node) == 1:
          if diff(word, target) == 0:
            return current_h + 1
          q.append(word)
          words.remove(word)
  
  return -1

print(diff("dog", "dogg"))
print(shortestWordEditPath("dog", "dogg", ["dogg"]))
  

// //////
class WordNode{
  String word;
  int numSteps;
  public WordNode(String word, int numSteps){
  this.word = word;
  this.numSteps = numSteps;
  }
  }
  public class Solution {
  public int ladderLength(String beginWord, String endWord, Set<String> wordDict) {
  
      LinkedList<WordNode> queue = new LinkedList<WordNode>();
      queue.add(new WordNode(beginWord, 1));
      wordDict.add(endWord);
      while(!queue.isEmpty()){
      WordNode top = queue.remove();
      String word = top.word;
      if(word.equals(endWord)){
      return top.numSteps;
  }
      char[] arr = word.toCharArray();
      for(int i=0; i<arr.length; i++){
      for(char c='a'; c<='z'; c++){
      char temp = arr[i];
      if(arr[i]!=c){
      arr[i]=c;
  }
      String newWord = new String(arr);
      if(wordDict.contains(newWord)){
      queue.add(new WordNode(newWord, top.numSteps+1));
      wordDict.remove(newWord);
  }
      arr[i]=temp;
  }
  }
  }
  return 0;
  }
  }

  /////


  // A Java Program to check whether a graph is tree or not 
import java.io.*; 
import java.util.*; 

// This class represents a directed graph using adjacency 
// list representation 
class Graph 
{ 
	private int V; // No. of vertices 
	private LinkedList<Integer> adj[]; //Adjacency List 

	// Constructor 
	Graph(int v) 
	{ 
		V = v; 
		adj = new LinkedList[v]; 
		for (int i=0; i<v; ++i) 
			adj[i] = new LinkedList(); 
	} 

	// Function to add an edge into the graph 
	void addEdge(int v,int w) 
	{ 
		adj[v].add(w); 
		adj[w].add(v); 
	} 

	// A recursive function that uses visited[] and parent 
	// to detect cycle in subgraph reachable from vertex v. 
	Boolean isCyclicUtil(int v, Boolean visited[], int parent) 
	{ 
		// Mark the current node as visited 
		visited[v] = true; 
		Integer i; 

		// Recur for all the vertices adjacent to this vertex 
		Iterator<Integer> it = adj[v].iterator(); 
		while (it.hasNext()) 
		{ 
			i = it.next(); 

			// If an adjacent is not visited, then recur for 
			// that adjacent 
			if (!visited[i]) 
			{ 
				if (isCyclicUtil(i, visited, v)) 
					return true; 
			} 

			// If an adjacent is visited and not parent of 
			// current vertex, then there is a cycle. 
			else if (i != parent) 
			return true; 
		} 
		return false; 
	} 

	// Returns true if the graph is a tree, else false. 
	Boolean isTree() 
	{ 
		// Mark all the vertices as not visited and not part 
		// of recursion stack 
		Boolean visited[] = new Boolean[V]; 
		for (int i = 0; i < V; i++) 
			visited[i] = false; 

		// The call to isCyclicUtil serves multiple purposes 
		// It returns true if graph reachable from vertex 0 
		// is cyclcic. It also marks all vertices reachable 
		// from 0. 
		if (isCyclicUtil(0, visited, -1)) 
			return false; 

		// If we find a vertex which is not reachable from 0 
		// (not marked by isCyclicUtil(), then we return false 
		for (int u = 0; u < V; u++) 
			if (!visited[u]) 
				return false; 

		return true; 
	} 

	// Driver method 
	public static void main(String args[]) 
	{ 
		// Create a graph given in the above diagram 
		Graph g1 = new Graph(5); 
		g1.addEdge(1, 0); 
		g1.addEdge(0, 2); 
		g1.addEdge(0, 3); 
		g1.addEdge(3, 4); 
		if (g1.isTree()) 
			System.out.println("Graph is Tree"); 
		else
			System.out.println("Graph is not Tree"); 

		Graph g2 = new Graph(5); 
		g2.addEdge(1, 0); 
		g2.addEdge(0, 2); 
		g2.addEdge(2, 1); 
		g2.addEdge(0, 3); 
		g2.addEdge(3, 4); 

		if (g2.isTree()) 
			System.out.println("Graph is Tree"); 
		else
			System.out.println("Graph is not Tree"); 

	} 
} 
// This code is contributed by Aakash Hasija 
