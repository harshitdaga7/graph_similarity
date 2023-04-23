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


function main(){
    
    
    simple_matching(graph_1,graph_2);
    root.innerHTML=global_result_string;

}















