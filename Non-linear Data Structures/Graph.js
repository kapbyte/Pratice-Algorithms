function Graph() {
  // adjacency lists ( using Map )
  var adjList = new Map();

  this.addVertex = function(v) {
    // initialize the adjacent list of (v) with a empty array
    adjList.set(v, []);
  }

  // add edge v-w (parallel edges and self-loops allowed)
  this.addEdge = function(v, w) {
    // get the list for vertex v and put the vertex w denoting edge between v and w 
    adjList.get(v).push(w);

    // Since graph is undirected, add an edge from w to v also
    adjList.get(w).push(v);
  }

  this.dfs = function(startNode) {
    // marked[v] = true if visited
    var marked = [];
    dfsHelper(startNode, marked);
  }

  function dfsHelper(vertex, marked) {
    marked[vertex] = true;
    console.log(vertex);

    // get vertex adjacent neighbours
    var vertexNeighbours = adjList.get(vertex);
    for (var i in vertexNeighbours) {
      if (!marked[vertexNeighbours[i]]) {
        dfsHelper(vertexNeighbours[i], marked);
      }
    }
  }

  this.bfs = function(startNode) {
    var marked = []; // marked[v] = true if visited
    var queue = [];
    queue.push(startNode);
    marked[startNode] = true;

    while(queue.length) {
      var vertex = queue.shift();

      // get vertex adjacent neighbours
      var vertexNeighbours = adjList.get(vertex);
      
      for (var i in vertexNeighbours) {
        if (!marked[vertexNeighbours[i]]) {
          queue.push(vertexNeighbours[i]);
          marked[vertexNeighbours[i]] = true;
        }
      }
    }
  }

}
