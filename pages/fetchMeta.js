const og = require('open-graph');

// const url = ' https://gifx.xyz/graphql';


export default function handler(req, res) {
    if (req.method === 'GET') {

        const url = req.query.url;
        og(url, function (err, meta) {
            if(typeof(meta) == typeof({}) ){
                res.status(200).json({ response: meta })
            }else{
                res.status(200).json({ response: {} })
            }
        
          });
    }else{
        res.status(200).json({ response: {} })
    }
  }
