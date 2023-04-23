// sample input for graph
let graph_1 = [[0,0,1,0,1],[0,1,0,0,1],[0,1,0,0,1],[0,1,0,0,0]]
let graph_2 = [[0,0,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,1,0,1,0]]





function simple_matching(g1,g2){

        /**
         * 
         * Input :  g1,g2 - 2-d aquare array , adjeceny matrix of graph
         * Output : json of metrics 
         *  
         *         Example : {"similarity_score":0.99,"reverse_similarity_score":0.6}
         *  */ 


        n = g1.length // dimension

        result = {"similarity_score":0.99,"reverse_similarity_score":0.6}

        console.log(result)

        return result        


}


function main(){

    simple_matching(graph_1,graph_2);

}


main()












