# def demo(data):
#     for index,num_data in enumerate(data):
#         update_data(num_data)
    
# def update_data(num_data):
#     num_data["key1"]=10

# data = [{"key1":2,"key2":3},{"key1":4,"key2":5},{"key1":7,"key2":8}]
# print(data)
# demo(data)
# print(data)

#Proof of concept of graph similarity
# Graph input format 
### 1 2
### 1 4
### 1 5

from matplotlib import pyplot as plt


MAX_NODES = 6

# map of nodes to websites
node_website_map = {

    0 : "tcet",
    1 : "youtube",
    2 : "coursera",
    3 : "udemy",
    4 : "instagram",
    5 : "facebook"

}

graph_1 = [[0,1,0,0,0],[0,0,0,1,0],[0,1,0,0,0],[0,1,0,0,0],[0,1,0,0,0]]
graph_2 = [[0,1,0,0,0],[0,0,1,0,0],[0,1,0,0,1],[0,1,0,0,0],[0,1,0,0,0]]
graph_3 = [[0,0,0,0,0],[0,0,0,1,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0]]

def similarity(g1,g2):

    n = len(g1)

    score_raw = 0
    div_factor_1 = 0
    div_factor_2 = 0

    for i in range(n):
        for j in range(n):

            if g1[i][j] == 1:
                div_factor_1 += 1
            
            if g2[i][j] == 1:
                div_factor_2 += 1
            


            if g1[i][j] == g2[i][j] and g1[i][j] == 1:
                score_raw += 1
    


    if div_factor_1 == 0:
        return 0
    elif div_factor_2 == 0:
        return 0
    else : return (score_raw/div_factor_1,score_raw/div_factor_2)



# print(similarity(graph_1,graph_2))

def calculate_cosine_similarity(g1,g2):
    cosine_distance_sum = 0
    n=len(g1)
    for i in range(0,n):
        cosine_dis = calculate_cosine_distance(g1[i],g2[i])
        cosine_distance_sum+=cosine_dis
    cosine_distance_avg=cosine_distance_sum/n
    return cosine_distance_avg

def calculate_cosine_distance(g1i,g2i):
    numerator=0
    for i in range(0,len(g1i)):
        numerator+= g1i[i]*g2i[i]
    denominator_g1i=0
    denominator_g2i=0
    for i in range(0,len(g1i)):
        denominator_g1i+= g1i[i]**2
    for i in range(0,len(g2i)):
        denominator_g2i+= g2i[i]**2
    if denominator_g1i==0 or denominator_g2i==0:
        return 1  
    cosine_distance = numerator/((denominator_g1i**(1/2))*(denominator_g2i**(1/2)))
    return cosine_distance

print(calculate_cosine_similarity(graph_1,graph_2))

def visualize(graph):
    import networkx as nx
    edges = []
    n = len(graph)
    for i in range(n):
        for j in range(n):
            if graph[i][j] == 1:
                edges.append((i,j))


    G = nx.DiGraph()


    G.add_edges_from(edges)

    plt.figure(figsize =(9, 9))
    nx.draw_networkx(G, node_color ='green')

    # getting different graph attributes
    print("Total number of nodes: ", int(G.number_of_nodes()))
    print("Total number of edges: ", int(G.number_of_edges()))
    print("List of all nodes: ", list(G.nodes()))
    print("List of all edges: ", list(G.edges()))
    print("In-degree for all nodes: ", dict(G.in_degree()))
    print("Out degree for all nodes: ", dict(G.out_degree))

    # print("Total number of self-loops: ", int(G.number_of_selfloops()))
    # print("List of all nodes with self-loops: ",list(G.nodes_with_selfloops()))

    # print("List of all nodes we can go to in a single step from node 2: ",list(G.successors(2)))

    # print("List of all nodes from which we can go to node 2 in a single step: ",list(G.predecessors(2)))

    plt.show()

visualize(graph_1)
visualize(graph_2)


def main():

    res1 = similarity(graph_1,graph_2)
    res2 = calculate_cosine_similarity(graph_1,graph_2)
    print(f"Sub graph matching similarity : wrt graph_1 {res1[0]}, wrt graph_2 {res1[1]}" )
    print(f"Cosine Similarity : {res2}")


main()

# visualize(graph_3)

# def test_plt():
    
#     import matplotlib.pyplot as plt
#     import numpy as np

#     # Data for plotting
#     t = np.arange(0.0, 2.0, 0.01)
#     s = 1 + np.sin(2 * np.pi * t)

#     fig, ax = plt.subplots()
#     ax.plot(t, s)

#     ax.set(xlabel='time (s)', ylabel='voltage (mV)',
#         title='About as simple as it gets, folks')
#     ax.grid()

#     fig.savefig("test.png")
#     plt.show()


# test_plt()
# map of username to uid
# user_db = {}

# map of graphs . Key - uid , Value - adjency matrix
# graphs_db = {}



# def input_user_graphs():

#     # takes user name and user graph and stores it into the user_db
#     user_name = input("Please enter user name")

#     if user_name == "":
#         print("retry , enter username please")
#         return
    

#     user_id = len(user_db.keys()) + 1

#     user_db[user_id] = user_name

#     print(f"Input the edges of graph , use ${node_website_map} as reference")
    
#     no_of_edges = input("No of edges : ")
#     graph = [[0 for i in range(6)] for j in range(6)]

#     for i in no_of_edges:



# def main():

#     input_user_graphs()


# main()