import { Router } from 'itty-router'

const router = Router()

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json"
};
router.get('/posts', () => new Response(JSON.stringify({
  data: [
    {"title":"My First Post", "username": "coolguy123", "content": "Hey Y'all!"}, 
    {"title":"Story About my Dogs", "username": "kn0thing", "content": "So the other day I was in the yard, and..."}
  ]
}),{
  headers
}))

router.post('/posts', async request => {
  // Create a base object with some fields.
  let fields = {
    "status": "success"
  }

  // If the POST data is JSON then attach it to our response.
  if (request.headers.get("Content-Type") === "application/json") {
    fields["json"] = await request.json()
  }

  // Serialise the JSON to a string.
  const returnData = JSON.stringify(fields, null, 2);

  return new Response(returnData, {
    headers
  })
})

router.options('/posts', () => new Response("success", { headers:{
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers": "*"
} }))

router.all("*", () => new Response("404, not found!", { status: 404 }))

addEventListener("fetch", event => {
  event.respondWith(router.handle(event.request))
})