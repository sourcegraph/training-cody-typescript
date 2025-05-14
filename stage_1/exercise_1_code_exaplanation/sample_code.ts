  type Edge = [string, number];
  type Graph = Record<string, Edge[]>;
  type QueueItem = [number, string, string[]];
  
  function shortestPath(graph: Graph, start: string, end: string): [number, string[] | null] {
    const distances: QueueItem[] = [[0, start, []]];
    
    const visited = new Map<string, number>();
    visited.set(start, 0);
    
    while (distances.length > 0) {
      distances.sort((a, b) => a[0] - b[0]);
      const [currentDistance, currentNode, path] = distances.shift()!;
      
      if (currentNode === end) {
        return [currentDistance, [...path, currentNode]];
      }
      
      if (currentDistance > (visited.get(currentNode) || Infinity)) {
        continue;
      }
      
      for (const [neighbor, weight] of graph[currentNode] || []) {
        const distance = currentDistance + weight;
        
        if (distance < (visited.get(neighbor) || Infinity)) {
          visited.set(neighbor, distance);
          distances.push([distance, neighbor, [...path, currentNode]]);
        }
      }
    }
    
    return [Infinity, null];
  }
  
  const sampleGraph: Graph = {
    'A': [['B', 5], ['C', 3], ['F', 7]],
    'B': [['A', 5], ['C', 1], ['D', 2]],
    'C': [['A', 3], ['B', 1], ['D', 6], ['G', 8]],
    'D': [['B', 2], ['C', 6], ['E', 4], ['F', 3]],
    'E': [['D', 4], ['G', 2]],
    'F': [['A', 7], ['D', 3], ['G', 1]],
    'G': [['C', 8], ['E', 2], ['F', 1]]
  };
  
  const [distance, path] = shortestPath(sampleGraph, 'A', 'D');
  console.log(`Shortest distance: ${distance}`);
  console.log(`Shortest path: ${path?.join(' -> ')}`);  