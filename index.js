// sample input for graph

let display_box=document.getElementById('display-box');
let friends_box=document.getElementById('friends');
let addFriends_box=document.getElementById('addFriends');
let traversed_box=document.getElementById('traversed-graph');
let NextOptions_box=document.getElementById('Next-Options');
let OurObj={
  friends:[],
  traversal:[[0, 1]],
  email:''
}


let people_list

let people = {
  1: {
    name:'rohan',
    p_id: 1,
    friends: [2, 4, 5],
    traversal: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 6], [6, 7], [7, 8], [8, 9]],
    email: "rohan@example.com"
  },
  2: {
    name:'jenny',
    p_id: 2,
    friends: [1, 3, 5],
    traversal: [[0, 1], [1, 2], [2, 4], [4, 5], [5, 9]],
    email: "jenny@example.com"
  },
  3: {
    name:'tom',
    p_id: 3,
    friends: [2, 4],
    traversal: [[0, 1], [1, 4], [4, 3], [3, 2]],
    email: "tom@example.com"
  },
  4: {
    name:'sarah',
    p_id: 4,
    friends: [1, 3, 5],
    traversal: [[0, 1], [1, 5], [5, 2], [2, 3], [3, 4]],
    email: "sarah@example.com"
  },
  5: {
    name:'mike',
    p_id: 5,
    friends: [2, 4],
    traversal: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]],
    email: "mike@example.com"
  }
};

objectmap={
 1: 'homepage',
 2: 'about',
 3: 'portfolio',
 4: 'services',
 5: 'testimonials',
 6: 'contact',
 7: 'blog',
 8: 'faq',
 9: 'team'
}



let webObjects = {
  homepage: {
    name:'homepage',
    id: 1,
    html: `
      <h1>Welcome to my website!</h1>
      <p>Click on the buttons below to explore:</p>
      <button onClick='displayfunc(webObjects.about )'>About</button>
      <button onClick='displayfunc(webObjects.portfolio )'>Portfolio</button>
      <button onClick='displayfunc(webObjects.services )'>Services</button>
      <button onClick='displayfunc(webObjects.testimonials )'>Testimonials</button>
    `,
  },
  about: {
    name:'about',
    id: 2,
    html: `
      <h1>About Me</h1>
      <p>Hi, I'm Jane! Here's a little bit about me:</p>
      <ul>
        <li>I'm a web developer</li>
        <li>I love to read and travel</li>
        <li>I have a cat named Mittens</li>
      </ul>
      <button onClick='displayfunc(webObjects.homepage )'>Homepage</button>
      <button onClick='displayfunc(webObjects.portfolio )'>Portfolio</button>
      <button onClick='displayfunc(webObjects.services )'>Services</button>
      <button onClick='displayfunc(webObjects.testimonials )'>Testimonials</button>
    `,
  },
  portfolio: {
    name:'portfolio',
    id: 3,
    html: `
      <h1>Portfolio</h1>
      <p>Check out some of my work:</p>
      <ul>
        <li><a href="#">Project 1</a></li>
        <li><a href="#">Project 2</a></li>
        <li><a href="#">Project 3</a></li>
      </ul>
      <button onClick='displayfunc(webObjects.homepage )'>Homepage</button>
      <button onClick='displayfunc(webObjects.about )'>About</button>
      <button onClick='displayfunc(webObjects.services )'>Services</button>
      <button onClick='displayfunc(webObjects.testimonials )'>Testimonials</button>
    `,
  },
  services: {
    name:'services',
    id: 4,
    html: `
      <h1>Services</h1>
      <p>Here are the services I offer:</p>
      <ul>
        <li>Web development</li>
        <li>Graphic design</li>
        <li>Social media management</li>
      </ul>
      <button onClick='displayfunc(webObjects.homepage )'>Homepage</button>
      <button onClick='displayfunc(webObjects.about )'>About</button>
      <button onClick='displayfunc(webObjects.portfolio )'>Portfolio</button>
      <button onClick='displayfunc(webObjects.testimonials )'>Testimonials</button>
    `,
  },
  testimonials: {
    name:'testimonials',
    id: 5,
    html: `
      <h1>Testimonials</h1>
      <p>Here's what my clients have to say:</p>
      <ul>
        <li>"Jane was a pleasure to work with! She delivered a great website in a timely manner." - John Smith</li>
        <li>"I would definitely recommend Jane for any web design or development projects." - Mary Jones</li>
        <li>"I'm so happy with the results of my social media campaign. Thanks, Jane!" - Bob Johnson</li>
      </ul>
      <button onClick='displayfunc(webObjects.homepage )'>Homepage</button>
      <button onClick='displayfunc(webObjects.about )'>
      About</button>
      <button onClick='displayfunc(webObjects.portfolio )'>Portfolio</button>
      <button onClick='displayfunc(webObjects.services )'>Services</button>
    `,
  },
  contact: {
    name:'contact',
  id: 6,
  html: `<h1>Contact Me</h1>
   <p>Want to get in touch? Fill out the form below:</p>
    <form> <label for="name">Name:</label> <input type="text" id="name" name="name"><br><br> <label for="email">Email:</label> <input type="email" id="email" name="email"><br><br> 
    <label for="message">Message:</label> 
    <textarea id="message" name="message" rows="5"></textarea>
    <br><br> 
    <button type="submit">Send</button> </form> <button onClick='displayfunc(webObjects.homepage )'>Homepage</button>
    <button onClick='displayfunc(webObjects.about )'>About</button> <button onClick='displayfunc(webObjects.portfolio )'>Portfolio</button> 
    <button onClick='displayfunc(webObjects.services )'>Services</button> ,
  `},
  blog: {
    name:'blog',
  id: 7,
  html: `<h1>Blog</h1>
   <p>Read my latest posts:</p>
    <ul> <li><a href="#">Post 1</a></li> <li><a href="#">Post 2</a></li> <li><a href="#">Post 3</a></li> </ul> 
    <button onClick='displayfunc(webObjects.homepage )'>Homepage</button> 
    <button onClick='displayfunc(webObjects.about )'>About</button> 
    <button onClick='displayfunc(webObjects.portfolio )'>Portfolio</button> 
    <button onClick='displayfunc(webObjects.services )'>Services</button> `,
  },
  faq: {
    name:'faq',
  id: 8,
  html: `<h1>FAQ</h1> <p>Have a question? Check out our frequently asked questions:</p>
   <ul> <li>Q: How long does it take to complete a website?<br>A: It depends on the complexity of the project, but most sites take 4-6 weeks to complete.</li> 
   <li>Q: What is your pricing?<br>A: Our pricing varies depending on the project. Contact us for a custom quote.</li> 
   <li>Q: Do you offer hosting?<br>A: We do not offer hosting, but we can recommend a reliable hosting provider.</li> </ul> 
   <button onClick='displayfunc(webObjects.homepage )'>Homepage</button> <button onClick='displayfunc(webObjects.about )'>About</button> 
   <button onClick='displayfunc(webObjects.portfolio )'>Portfolio</button> <button onClick='displayfunc(webObjects.services )'>Services</button> ,
  `},
  team: {
    name:'team',
  id: 9,
  html: `<h1>Our Team</h1>
  <p>Meet our talented team:</p>
  <ul>
  <li>John Smith - CEO</li>
  <li>Jane Doe - Web Developer</li>
  <li>Bob Johnson - Graphic Designer</li>
  </ul>
  <button onClick='displayfunc(webObjects.homepage )'>Homepage</button>
  <button onClick='displayfunc(webObjects.about )'>About</button>
  <button onClick='displayfunc(webObjects.portfolio )'>Portfolio</button>
  <button onClick='displayfunc(webObjects.services )'>Services</button>
  , }, testimonials: { id: 10, html: <h1>Testimonials</h1>
  <p>See what our satisfied clients have to say:</p>
  <ul>
  <li>"Working with this team was a great experience. They really listened to our needs and delivered a high-quality website."</li>
  <li>"We were impressed with their attention to detail and fast turnaround time. Highly recommend!"</li>
  <li>"The team was very professional and easy to work with. We're very happy with the results."</li>
  </ul>
  <button onClick='displayfunc(webObjects.homepage )'>Homepage</button>
  <button onClick='displayfunc(webObjects.about )'>About</button>
  <button onClick='displayfunc(webObjects.portfolio )'>Portfolio</button>
  <button onClick='displayfunc(webObjects.services )'>Services</button>
  `,
  }
  };
    
let current_pos=1;


function displayfunc(Object){
  let containsflag = true;
  for(let j=0; j<OurObj.traversal.length; j++){
    if(OurObj.traversal[j][0]===current_pos && OurObj.traversal[j][1]===Object.id){
      containsflag=false;
  }}
  if(containsflag==true){
    OurObj.traversal.push([current_pos,Object.id]);
 }
  display_box.innerHTML=Object.html;
  traversed_box.innerHTML=JSON.stringify(OurObj.traversal);
  current_pos=Object.id;
  addFriendsDisp();
  DispNextOptions();
}

let directedConnections = [];



let graph_1 = [[0,0,1,0,1],[0,1,0,0,1],[0,1,0,0,1],[0,1,0,0,0],[0,1,0,0,0]];
let graph_2 = [[0,0,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,1,0,1,0],[0,1,0,0,0]];
// let root = document.getElementById("")
let global_result_string ="";
let gt_1 = [[0,2],[0,4],[1,1],[1,4],[2,1],[2,4],[3,1],[4,1]];

function generateMatrix(n) {
    // Create an empty matrix with n rows and n columns
     let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    return matrix;
  }


  function increaseMatrixSize(matrix, m) {
     let n = matrix.length;
    // Check if matrix already has the desired size
    if (n === m) {
      return matrix;
    }
    // Create a new matrix with the desired size
     let newMatrix = new Array(m).fill(0).map(() => new Array(m).fill(0));
    // Copy the old values into the new matrix
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        newMatrix[i][j] = matrix[i][j];
      }
    }
    return newMatrix;
  }


  function setDiagonalToZero(matrix) {
     let n = matrix.length;
    // Loop through each row of the matrix
    for (let i = 0; i < n; i++) {
      // Set the diagonal element to 0
      matrix[i][i] = 0;
    }
    return matrix;
  }


function adjMat_2_directedEdges(Graph){
    let DEgraph=[];
    for(let i=0; i<Graph.length; i++){
        for(let j=0; j<Graph[i].length; j++){
            
            if(Graph[i][j]==1){
                DEgraph.push([i,j]);
            }
        }
    }
    global_result_string+="<br/>"+JSON.stringify(DEgraph);
    return DEgraph;
}


function dircetedEdges_2_adjMat(Graph){
    global_result_string+="<br/>"+JSON.stringify(Graph);
    let size= 0;
    for (let i=0; i<Graph.length; i++){
        if(Graph[i][0]>size){
            size=Graph[i][0];
        }
        if(Graph[i][1]>size){
            size=Graph[i][1];
        }
    }
    let AdjMat=generateMatrix(size+1);
    for(let i=0; i<Graph.length; i++){
        AdjMat[Graph[i][0]][Graph[i][1]]=1;
    }
    global_result_string+="<br/>"+JSON.stringify(AdjMat);
    return AdjMat;
}


function simple_matching(g1,g2){
    g1=setDiagonalToZero(g1);
    g2=setDiagonalToZero(g2);
    console.log(g1)
    console.log(g2)
    let E1=0;
    let E2=0;
    let Common=0;
    if (g1.length>g2.length){
        g2=increaseMatrixSize(g2,g1.length)
    }else if (g1.length<g2.length) {
        g1=increaseMatrixSize(g1,g2.length)
    } 

        n = g1.length ;// dimension;
        for(let i=0; i<g1.length; i++){
            for(let j=0; j<g1.length; j++){
                
                if(g1[i][j]==1){
                    E1++;
                }
                if(g2[i][j]==1){
                    E2++;
                }

                if ((g1[i][j]==g2[i][j]) && (g1[i][j]==1)){
                    Common++;
                }
            }
        }
    
        result = {"similarity_score":Common/E1,"reverse_similarity_score":Common/E2, "jaccards_similarity" : Common/(E1+E2-Common)};
        global_result_string+="<br/>"+JSON.stringify(result);
        return result     ;   
}

function binaryCosineSimilarity(matrix1, matrix2) {
    // Flatten the matrices into 1D arrays
     let arr1 = matrix1.flat();
     let arr2 = matrix2.flat();
    // Compute the dot product of the two arrays
     let dotProduct = arr1.reduce(
      (acc, val, i) => acc + val * arr2[i],
      0
    );
    // Compute the magnitude of the two arrays
     let mag1 = Math.sqrt(
      arr1.reduce((acc, val) => acc + val ** 2, 0)
    );
     let mag2 = Math.sqrt(
      arr2.reduce((acc, val) => acc + val ** 2, 0)
    );
    // Compute the cosine similarity between the two arrays
     let cosineSimilarity = dotProduct / (mag1 * mag2);
    return cosineSimilarity;
  }

  function getSecondNumbers(pairs, nums) {
    return pairs
      .filter(pair => nums.includes(pair[0]) && pair[1] !== undefined && !nums.includes(pair[1]))
      .map(pair => pair[1]);
  }

  function getCommonVertices(edges1, edges2) {
     let vertices1 = new Set(edges1.flat());
     let vertices2 = new Set(edges2.flat());
     let commonVertices = [...vertices1].filter(vertex => vertices2.has(vertex) && [...vertices1].filter(v => v === vertex).length > 1);
    return commonVertices;
  }


  // function sortSimilarityScores(list) {
  //    let sortedList = list.sort((a, b) => {
  //     // Sort by descending similarity_score
  //     if (a.similarity_score !== b.similarity_score) {
  //       return b.similarity_score - a.similarity_score;
  //     }
  //     // Sort by ascending distance from 1.0
  //      let aDistance = Math.abs(a.reverse_similarity_score - 1);
  //      let bDistance = Math.abs(b.reverse_similarity_score - 1);
  //     return aDistance - bDistance;
  //   });
  //   return sortedList;
  // }

  //  let inputList = [
  //   {"similarity_score":0.34,"reverse_similarity_score":0.90},
  //   {"similarity_score":0.56,"reverse_similarity_score":0.56},
  //   {"similarity_score":0.78,"reverse_similarity_score":0.99},
  //   {"similarity_score":0.56,"reverse_similarity_score":0.98},
  //   {"similarity_score":0.90,"reverse_similarity_score":0.50}
  // ];
  
  //  let outputList = sortSimilarityScores(inputList);
    // // iterate over each webpage in webObjects
    // for ( let page in webObjects) {
    //   // find all the buttons in the webpage
    //    let buttons = webObjects[page].html.match(/<button onClick='displayfunc\((.*?)\)/g);
    
    //   // if the webpage has buttons, extract the ids from their onClick attributes
    //   if (buttons) {
    //     for ( let button of buttons) {
    //        let id = button.match(/webObjects\.(.*?)\.html/)[1];
    //       directedConnections.push([webObjects[page].id, webObjects[id].id]);
    //     }
    //   }
    // }
    // console.log(directedConnections); 
    // global_result_string+="<br/>"+JSON.stringify(directedConnections)


    function addFriendsDisp(){
      let listofSuggFriends=[];
      let htmlFriends=``;
      for( let person in people){
        let ourMATrix=  dircetedEdges_2_adjMat(OurObj.traversal);
        let personMatrix =dircetedEdges_2_adjMat(people[person].traversal);
         if(personMatrix.length>ourMATrix.length){
          ourMATrix=increaseMatrixSize(ourMATrix,personMatrix.length)
         }
         else if(personMatrix.length<ourMATrix.length){
          personMatrix=increaseMatrixSize(personMatrix,ourMATrix.length)
         }
         listofSuggFriends.push([people[person].name, binaryCosineSimilarity(ourMATrix,personMatrix), people[person].p_id]);
      }
      listofSuggFriends=listofSuggFriends.sort((a, b) => b[1] - a[1]);
      for(let i=0; i<listofSuggFriends.length; i++){
        let checkFlag=true;
        for(let j=0; j<OurObj.friends.length; j++){
          if(OurObj.friends[j][0]==listofSuggFriends[i][0]){
            checkFlag=false;
          }
        }
        if (checkFlag!=true){
          htmlFriends+=`<button style=" color:blue"><B>${listofSuggFriends[i][0]}</B>, cosine-similarity: ${Math.round(listofSuggFriends[i][1]*10000)/100}%</button>`
        }
      else{
        htmlFriends+=`<button onClick='addFriends("${listofSuggFriends[i][0]}",${listofSuggFriends[i][2]})'><B>${listofSuggFriends[i][0]}</B>, cosine-similarity: ${Math.round(listofSuggFriends[i][1]*10000)/100}%</button>`
        
      }
      }
      addFriends_box.innerHTML=htmlFriends;
    }

    function addFriends(name,p_id){
      let containsflag=true;
      if (OurObj.friends.length==0){
        OurObj.friends.push([name,p_id]);
      }
      else{
      for(let j=0; j<OurObj.friends.length; j++){

        if((OurObj.friends[j][0]===name && OurObj.friends[j][1]===p_id)){
          containsflag=false;
      }}
      if(containsflag==true){
      OurObj.friends.push([name,p_id]);
     }}
      let friend_names=``;
      for(let i=0; i<OurObj.friends.length;i++){
        friend_names+=` <h4><B>${OurObj.friends[i][0]}</h4></B><br>`
      }
      friends_box.innerHTML=friend_names;
      addFriendsDisp();
      DispNextOptions()
    }

    function sortArrayByJaccardSimilarity(arr) {
      //In the example above, the array of arrays is sorted by descending order of their jaccard similarity score. If two elements have the same jaccard similarity score, they are compared by their reverse similarity score in descending order. If an element has a reverse similarity score of 1, it gets the last position.
      arr.sort(function(a, b) {
        // Compare by jaccard_similarity in descending order
        if (a[1].jaccards_similarity > b[1].jaccards_similarity) {
          return -1;
        }
        if (a[1].jaccards_similarity < b[1].jaccards_similarity) {
          return 1;
        }
        // If jaccard_similarity is the same, compare by reverse_similarity_score in descending order
        if (a[1].reverse_similarity_score === 1 && b[1].reverse_similarity_score !== 1) {
          return 1;
        }
        if (a[1].reverse_similarity_score !== 1 && b[1].reverse_similarity_score === 1) {
          return -1;
        }
        if (a[1].reverse_similarity_score > b[1].reverse_similarity_score) {
          return -1;
        }
        if (a[1].reverse_similarity_score < b[1].reverse_similarity_score) {
          return 1;
        }
        return 0;
      });
      return arr;
    }

    // function findCommonVerticesAndNeighbors(edges1, edges2) {
    //   const commonVertices = new Set();
    //   const verticesConnectedToCommon = new Set();
    
    //   // Extract vertices from the first list of edges
    //   const vertices1 = new Set();
    //   for (const edge of edges1) {
    //     vertices1.add(edge[0]);
    //     vertices1.add(edge[1]);
    //   }
    
    //   // Extract vertices from the second list of edges and check for common vertices
    //   const vertices2 = new Set();
    //   for (const edge of edges2) {
    //     vertices2.add(edge[0]);
    //     vertices2.add(edge[1]);
    //     if (vertices1.has(edge[0]) && vertices1.has(edge[1])) {
    //       commonVertices.add(edge[0]);
    //       verticesConnectedToCommon.add(edge[1]);
    //     }
    //   }
    
    //   return [Array.from(commonVertices), Array.from(verticesConnectedToCommon)];
    // }

    function findCommonVerticesAndEdges(edges1, edges2) {
      const commonVertices = new Set();
      const edgesConnectedToCommon = [];
    
      // Extract vertices from the first list of edges
      const vertices1 = new Set();
      for (const edge of edges1) {
        vertices1.add(edge[0]);
        vertices1.add(edge[1]);
      }
    
      // Find edges connected to common vertices in the second list of edges
      for (const edge of edges2) {
        if (vertices1.has(edge[0]) && vertices1.has(edge[1])) {
          commonVertices.add(edge[0]);
          edgesConnectedToCommon.push(edge);
        }
      }
    
      return [Array.from(commonVertices), edgesConnectedToCommon];
    }

    function removeRepeatedPairs(list) {
      var uniquePairs = [];
      var pairStringSet = new Set();
    
      for (var i = 0; i < list.length; i++) {
        var pair = list[i];
        var pairString = pair.toString();
    
        if (!pairStringSet.has(pairString)) {
          uniquePairs.push(pair);
          pairStringSet.add(pairString);
        }
      }
    
      return uniquePairs;
    }

    function getSecondNumbersWithFirstNumber(c, list) {
      var secondNumbers = [];
    
      for (var i = 0; i < list.length; i++) {
        var pair = list[i];
        var firstNumber = pair[0];
        var secondNumber = pair[1];
    
        if (firstNumber === c) {
          secondNumbers.push(secondNumber);
        }
      }
    
      return secondNumbers;
    }

    function DispNextOptions(){
      let similarity_list=[];
  
      for(let i=0; i<OurObj.friends.length; i++){
        similarity_list.push([OurObj.friends[i][0], simple_matching(dircetedEdges_2_adjMat(OurObj.traversal),dircetedEdges_2_adjMat(people[`${OurObj.friends[i][1]}`].traversal)), OurObj.friends[i][1]]);
      }
      console.log('similarity_list');
      console.log(similarity_list);
      console.log(JSON.stringify(similarity_list));
      console.log( 'SORTED similarity_list');
      similarity_list=sortArrayByJaccardSimilarity(similarity_list);
      console.log(similarity_list);

      let numSugVetx=0;

      let =commonNeighbours=[];
      for(let i=0; i<similarity_list.length;i++){
        commonNeighbours.push(findCommonVerticesAndEdges(OurObj.traversal, people[`${similarity_list[i][2]}`].traversal))
      }
      console.log(commonNeighbours)

      let all_edges=[];

      for(let i=0; i<commonNeighbours.length;i++){
        for(let j=0; j<commonNeighbours[i][1].length; j++){
          all_edges.push(commonNeighbours[i][1][j])
        }
      }
      console.log(all_edges)
      all_edges=removeRepeatedPairs(all_edges);
      console.log(all_edges)


      // while(numSugVetx<3){

      //   getCommonVertices(OurObj.traversal, similarity_list)


      // }

      let NEXT_OPTIONS_NUMBERS=getSecondNumbersWithFirstNumber(current_pos,all_edges)
      nextOptHtml='';
      for(pages in webObjects){
        for(let i=0; i<NEXT_OPTIONS_NUMBERS.length;i++){
          if(webObjects[pages].id==NEXT_OPTIONS_NUMBERS[i]){
            nextOptHtml+=`<button onClick="displayfunc(webObjects.${webObjects[pages].name})">${webObjects[pages].name}</button>`
          }
        }
      }



      NextOptions_box.innerHTML=nextOptHtml;
    }

    
function main(){

  addFriendsDisp();
  DispNextOptions();
  displayfunc(webObjects.homepage);

}

// let OurObj={
//   friends:[],
//   traversal:[[0, 1]],
//   email:''
// }

function drawGraph(){

  let edges_list = [];
  let nodes_list = [];

  


}

// create data
var data = {
  nodes: [
    {id: "Richard"},
    {id: "Larry"},
    {id: "Marta"},
    {id: "Jane"},
    {id: "Norma"},
    {id: "Frank"},
    {id: "Brett"}
  ],
  edges: [
    {from: "Richard", to: "Larry"},
    {from: "Richard", to: "Marta"},
    {from: "Larry",   to: "Marta"},
    {from: "Marta",   to: "Jane"},
    {from: "Jane",    to: "Norma"},
    {from: "Jane",    to: "Frank"},
    {from: "Jane",    to: "Brett"},
    {from: "Brett",   to: "Frank"}
  ]
};

// create a chart and set the data
var chart = anychart.graph(data);

// set the container id
chart.container("root");

// initiate drawing the chart
chart.draw();















