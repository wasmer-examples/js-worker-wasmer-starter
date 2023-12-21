async function handler(request) {
  const out = JSON.stringify({
    success: true,
    package: "wasmer/js-worker-starter",
  });
  return new Response(out, {
    headers: { "content-type": "application/json" },
  });
}

addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(handler(fetchEvent.request));
});
