export default function handler(req, res){

    console.log(req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({name:'John Doe'}));

}