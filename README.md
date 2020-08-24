# Express.js-Middleware
Express.js Middleware


Middleware are functions through which our requests are passed.

When we send a request our request is passed to all the middleware functions.

there could be more than one middleware functions.

a middleware functionj gets 3 default parameters/arguments -

'req' , 'res' , 'next'

where req is the request

res is the response

next is actually a function which passes the request to the further middleware.

If we dont use next(), then our request wont be forwarded to the next middleware and our request will die without any response.


We NOT always have to call next() we could also send a response instead and in express we dont need to use setHeader() or write() to send response using -

res.send('')

we can send anything inside it like html, text, file.

