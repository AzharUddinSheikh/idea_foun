const chunkPost = <T>(dataList: Array<T>, chunkSize:number): Array<Array<T>> => {
  let output: Array<Array<T>> = [[],[],[]];
  
  dataList.forEach((element, index) => {
    output[index % chunkSize].push(element)
  });
  return output;
};

export default chunkPost;
