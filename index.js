// sample input for graph

let display_box=document.getElementById('display-box');
let friends_box=document.getElementById('friends');
let addFriends_box=document.getElementById('addFriends');
let OurObj={
  friends:[],
  traversal:[[0, 1]],
  email:''
}






let people = {
  rohan: {
    p_id: 1,
    friends: [2, 4, 5],
    traversal: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 6], [6, 7], [7, 8], [8, 9]],
    email: "rohan@example.com"
  },
  jenny: {
    p_id: 2,
    friends: [1, 3, 5],
    traversal: [[0, 1], [1, 2], [2, 4], [4, 5], [5, 9]],
    email: "jenny@example.com"
  },
  tom: {
    p_id: 3,
    friends: [2, 4],
    traversal: [[0, 1], [1, 4], [4, 3], [3, 2]],
    email: "tom@example.com"
  },
  sarah: {
    p_id: 4,
    friends: [1, 3, 5],
    traversal: [[0, 1], [1, 5], [5, 2], [2, 3], [3, 4]],
    email: "sarah@example.com"
  },
  mike: {
    p_id: 5,
    friends: [2, 4],
    traversal: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 1]],
    email: "mike@example.com"
  }
};

let webObjects = {
  homepage: {
    id: 1,
    html: `
      <h1>Welcome to my website!</h1>
      <p>Click on the buttons below to explore:</p>
      <button onClick='displayfunc(webObjects.about.html)'>About</button>
      <button onClick='displayfunc(webObjects.portfolio.html)'>Portfolio</button>
      <button onClick='displayfunc(webObjects.services.html)'>Services</button>
      <button onClick='displayfunc(webObjects.testimonials.html)'>Testimonials</button>
    `,
  },
  about: {
    id: 2,
    html: `
      <h1>About Me</h1>
      <p>Hi, I'm Jane! Here's a little bit about me:</p>
      <ul>
        <li>I'm a web developer</li>
        <li>I love to read and travel</li>
        <li>I have a cat named Mittens</li>
      </ul>
      <button onClick='displayfunc(webObjects.homepage.html)'>Homepage</button>
      <button onClick='displayfunc(webObjects.portfolio.html)'>Portfolio</button>
      <button onClick='displayfunc(webObjects.services.html)'>Services</button>
      <button onClick='displayfunc(webObjects.testimonials.html)'>Testimonials</button>
    `,
  },
  portfolio: {
    id: 3,
    html: `
      <h1>Portfolio</h1>
      <p>Check out some of my work:</p>
      <ul>
        <li><a href="#">Project 1</a></li>
        <li><a href="#">Project 2</a></li>
        <li><a href="#">Project 3</a></li>
      </ul>
      <button onClick='displayfunc(webObjects.homepage.html)'>Homepage</button>
      <button onClick='displayfunc(webObjects.about.html)'>About</button>
      <button onClick='displayfunc(webObjects.services.html)'>Services</button>
      <button onClick='displayfunc(webObjects.testimonials.html)'>Testimonials</button>
    `,
  },
  services: {
    id: 4,
    html: `
      <h1>Services</h1>
      <p>Here are the services I offer:</p>
      <ul>
        <li>Web development</li>
        <li>Graphic design</li>
        <li>Social media management</li>
      </ul>
      <button onClick='displayfunc(webObjects.homepage.html)'>Homepage</button>
      <button onClick='displayfunc(webObjects.about.html)'>About</button>
      <button onClick='displayfunc(webObjects.portfolio.html)'>Portfolio</button>
      <button onClick='displayfunc(webObjects.testimonials.html)'>Testimonials</button>
    `,
  },
  testimonials: {
    id: 5,
    html: `
      <h1>Testimonials</h1>
      <p>Here's what my clients have to say:</p>
      <ul>
        <li>"Jane was a pleasure to work with! She delivered a great website in a timely manner." - John Smith</li>
        <li>"I would definitely recommend Jane for any web design or development projects." - Mary Jones</li>
        <li>"I'm so happy with the results of my social media campaign. Thanks, Jane!" - Bob Johnson</li>
      </ul>
      <button onClick='displayfunc(webObjects.homepage.html)'>Homepage</button>
      <button onClick='displayfunc(webObjects.about.html)'>
      About</button>
      <button onClick='displayfunc(webObjects.portfolio.html)'>Portfolio</button>
      <button onClick='displayfunc(webObjects.services.html)'>Services</button>
    `,
  },
  contact: {
  id: 6,
  html: `<h1>Contact Me</h1>
   <p>Want to get in touch? Fill out the form below:</p>
    <form> <label for="name">Name:</label> <input type="text" id="name" name="name"><br><br> <label for="email">Email:</label> <input type="email" id="email" name="email"><br><br> 
    <label for="message">Message:</label> 
    <textarea id="message" name="message" rows="5"></textarea>
    <br><br> 
    <button type="submit">Send</button> </form> <button onClick='displayfunc(webObjects.homepage.html)'>Homepage</button>
    <button onClick='displayfunc(webObjects.about.html)'>About</button> <button onClick='displayfunc(webObjects.portfolio.html)'>Portfolio</button> 
    <button onClick='displayfunc(webObjects.services.html)'>Services</button> ,
  `},
  blog: {
  id: 7,
  html: `<h1>Blog</h1>
   <p>Read my latest posts:</p>
    <ul> <li><a href="#">Post 1</a></li> <li><a href="#">Post 2</a></li> <li><a href="#">Post 3</a></li> </ul> 
    <button onClick='displayfunc(webObjects.homepage.html)'>Homepage</button> 
    <button onClick='displayfunc(webObjects.about.html)'>About</button> 
    <button onClick='displayfunc(webObjects.portfolio.html)'>Portfolio</button> 
    <button onClick='displayfunc(webObjects.services.html)'>Services</button> `,
  },
  faq: {
  id: 8,
  html: `<h1>FAQ</h1> <p>Have a question? Check out our frequently asked questions:</p>
   <ul> <li>Q: How long does it take to complete a website?<br>A: It depends on the complexity of the project, but most sites take 4-6 weeks to complete.</li> 
   <li>Q: What is your pricing?<br>A: Our pricing varies depending on the project. Contact us for a custom quote.</li> 
   <li>Q: Do you offer hosting?<br>A: We do not offer hosting, but we can recommend a reliable hosting provider.</li> </ul> 
   <button onClick='displayfunc(webObjects.homepage.html)'>Homepage</button> <button onClick='displayfunc(webObjects.about.html)'>About</button> 
   <button onClick='displayfunc(webObjects.portfolio.html)'>Portfolio</button> <button onClick='displayfunc(webObjects.services.html)'>Services</button> ,
  `},
  team: {
  id: 9,
  html: `<h1>Our Team</h1>
  <p>Meet our talented team:</p>
  <ul>
  <li>John Smith - CEO</li>
  <li>Jane Doe - Web Developer</li>
  <li>Bob Johnson - Graphic Designer</li>
  </ul>
  <button onClick='displayfunc(webObjects.homepage.html)'>Homepage</button>
  <button onClick='displayfunc(webObjects.about.html)'>About</button>
  <button onClick='displayfunc(webObjects.portfolio.html)'>Portfolio</button>
  <button onClick='displayfunc(webObjects.services.html)'>Services</button>
  , }, testimonials: { id: 10, html: <h1>Testimonials</h1>
  <p>See what our satisfied clients have to say:</p>
  <ul>
  <li>"Working with this team was a great experience. They really listened to our needs and delivered a high-quality website."</li>
  <li>"We were impressed with their attention to detail and fast turnaround time. Highly recommend!"</li>
  <li>"The team was very professional and easy to work with. We're very happy with the results."</li>
  </ul>
  <button onClick='displayfunc(webObjects.homepage.html)'>Homepage</button>
  <button onClick='displayfunc(webObjects.about.html)'>About</button>
  <button onClick='displayfunc(webObjects.portfolio.html)'>Portfolio</button>
  <button onClick='displayfunc(webObjects.services.html)'>Services</button>
  `,
  }
  };
    

function displayfunc(html){
  display_box.innerHTML=html;
}

let directedConnections = [];



let graph_1 = [[0,0,1,0,1],[0,1,0,0,1],[0,1,0,0,1],[0,1,0,0,0],[0,1,0,0,0]];
let graph_2 = [[0,0,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,1,0,1,0],[0,1,0,0,0]];
// let root = document.getElementById("")
let global_result_string ="";
let gt_1 = [[0,2],[0,4],[1,1],[1,4],[2,1],[2,4],[3,1],[4,1]];

function generateMatrix(n) {
    // Create an empty matrix with n rows and n columns
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    return matrix;
  }
  function increaseMatrixSize(matrix, m) {
    const n = matrix.length;
  
    // Check if matrix already has the desired size
    if (n === m) {
      return matrix;
    }
  
    // Create a new matrix with the desired size
    const newMatrix = new Array(m).fill(0).map(() => new Array(m).fill(0));
  
    // Copy the old values into the new matrix
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        newMatrix[i][j] = matrix[i][j];
      }
    }

  
    return newMatrix;
  }
  function setDiagonalToZero(matrix) {
    const n = matrix.length;
  
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
    console.log(Graph);
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

    adjMat_2_directedEdges(g1);
    adjMat_2_directedEdges(g2);

    let E1=0;
    let E2=0;
    let Common=0;

    if (g1.length>g2.length){
        g2=increaseMatrixSize(g2,g1.length)
    }else if (g1.length<g2.length) {
        g1=increaseMatrixSize(g1,g2.length)
    } else {
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


    }
    
        result = {"similarity_score":Common/E1,"reverse_similarity_score":Common/E2, "jaccards_similarity" : Common/(E1+E2-Common)};
        console.log(result);
        global_result_string+="<br/>"+JSON.stringify(result);
        
        return result     ;   
}

function binaryCosineSimilarity(matrix1, matrix2) {
    // Flatten the matrices into 1D arrays
    const arr1 = matrix1.flat();
    const arr2 = matrix2.flat();
  
    // Compute the dot product of the two arrays
    const dotProduct = arr1.reduce(
      (acc, val, i) => acc + val * arr2[i],
      0
    );
  
    // Compute the magnitude of the two arrays
    const mag1 = Math.sqrt(
      arr1.reduce((acc, val) => acc + val ** 2, 0)
    );
    const mag2 = Math.sqrt(
      arr2.reduce((acc, val) => acc + val ** 2, 0)
    );
  
    // Compute the cosine similarity between the two arrays
    const cosineSimilarity = dotProduct / (mag1 * mag2);
  
    return cosineSimilarity;
  }

  function getSecondNumbers(pairs, nums) {
    return pairs
      .filter(pair => nums.includes(pair[0]) && pair[1] !== undefined && !nums.includes(pair[1]))
      .map(pair => pair[1]);
  }

  function getCommonVertices(edges1, edges2) {
    const vertices1 = new Set(edges1.flat());
    const vertices2 = new Set(edges2.flat());
    const commonVertices = [...vertices1].filter(vertex => vertices2.has(vertex) && [...vertices1].filter(v => v === vertex).length > 1);
    return commonVertices;
  }


  function sortSimilarityScores(list) {
    const sortedList = list.sort((a, b) => {
      // Sort by descending similarity_score
      if (a.similarity_score !== b.similarity_score) {
        return b.similarity_score - a.similarity_score;
      }
      // Sort by ascending distance from 1.0
      const aDistance = Math.abs(a.reverse_similarity_score - 1);
      const bDistance = Math.abs(b.reverse_similarity_score - 1);
      return aDistance - bDistance;
    });
    return sortedList;
  }

  const inputList = [
    {"similarity_score":0.34,"reverse_similarity_score":0.90},
    {"similarity_score":0.56,"reverse_similarity_score":0.56},
    {"similarity_score":0.78,"reverse_similarity_score":0.99},
    {"similarity_score":0.56,"reverse_similarity_score":0.98},
    {"similarity_score":0.90,"reverse_similarity_score":0.50}
  ];
  
  const outputList = sortSimilarityScores(inputList);
  
  console.log(outputList);

    // // iterate over each webpage in webObjects
    // for (const page in webObjects) {
    //   // find all the buttons in the webpage
    //   const buttons = webObjects[page].html.match(/<button onClick='displayfunc\((.*?)\)/g);
    
    //   // if the webpage has buttons, extract the ids from their onClick attributes
    //   if (buttons) {
    //     for (const button of buttons) {
    //       const id = button.match(/webObjects\.(.*?)\.html/)[1];
    //       directedConnections.push([webObjects[page].id, webObjects[id].id]);
    //     }
    //   }
    // }
    
    // console.log(directedConnections); 
    // global_result_string+="<br/>"+JSON.stringify(directedConnections)


    function addFriendsDisp(){
      let listofSuggFriends=[];
      let htmlFriends=``;
      for(const person in people){
        let ourMATrix=  dircetedEdges_2_adjMat(OurObj.traversal);
        let personMatrix =dircetedEdges_2_adjMat(people[person].traversal);
         if(personMatrix.length>ourMATrix.length){
          ourMATrix=increaseMatrixSize(ourMATrix,personMatrix.length-ourMATrix.length)
         }
         else if(personMatrix.length<ourMATrix.length){
          personMatrix=increaseMatrixSize(personMatrix,ourMATrix.length-personMatrix.length)
         }





         listofSuggFriends.push([people[person].p_id, binaryCosineSimilarity(ourMATrix,personMatrix)]);

      }
      listofSuggFriends=listofSuggFriends.sort((a, b) => b[1] - a[1])

      for(let i=0; i<3; i++){
        htmlFriends+=`<button onClick='addFriends(${listofSuggFriends[i][0]})'>${listofSuggFriends[i][0]}</button>`
      }
    
      addFriends_box.innerHTML=htmlFriends;
    }

    function addFriends(num){
      
      OurObj.friends.push(num)
      friends_box.innerHTML=JSON.stringify(OurObj.friends)
    }


    
function main(){

  addFriendsDisp();

  displayfunc(webObjects.homepage.html)
    const pairs = [[1,2],[5,6],[7,9],[8,9]];
    const nums = [8,9,5];
    friends_box.innerHTML=JSON.stringify(OurObj.friends)




    const output = getSecondNumbers(pairs, nums);
    
    console.log(output);

    const outputList = sortSimilarityScores(inputList);
    
    console.log(outputList);

    const edges1 = [[2,3]];
    const edges2 = [[2,3],[4,5],[3,4]];
    
    const output2 = getCommonVertices(edges1, edges2);
    
    console.log(output2); // Output: [2, 3]

    console.log(binaryCosineSimilarity(graph_1,graph_1));
    console.log(binaryCosineSimilarity(graph_1,graph_2));
    console.log(binaryCosineSimilarity(graph_2,graph_2));
    console.log(binaryCosineSimilarity(graph_2,graph_1));
    simple_matching(graph_1,graph_2);
    root.innerHTML=global_result_string;

}















