// sample input for graph
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
    
    let size= 0;
    for (let i=0; i<Graph.length; i++){
        if(Graph[i][0]>size){
            size=Graph[i][0];
        }
        if(Graph[i][1]>size){
            size=Graph[i][1];
        }
    }
    console.log(size);
    let AdjMat=generateMatrix(size+1);
    console.log(AdjMat);


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
    
        result = {"similarity_score":Common/E1,"reverse_similarity_score":Common/E2};
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

function main(){
    const pairs = [[1,2],[5,6],[7,9],[8,9]];
    const nums = [8,9,5];
    
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















