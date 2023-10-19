import { RequestOptions, request as _request } from "http"

export const translate = (word:string)=>{
  console.log(word);
  
  const requestOptions:RequestOptions = {
    hostname:'127.0.0.1',
    port:3000,
    path:'/translate?word=' + word,
    method:'GET'
  }

  const request = _request(requestOptions,(response)=>{
    let chunks:Buffer[] = []
    response.on('data',(chunk:Buffer)=>{
      chunks.push(chunk)
    })
    response.on('end',()=>{
      console.log(Buffer.concat(chunks).toString());
    })
  })
  request.on('error',(e)=>{
    console.error(e)
  })
  request.end()
}
