This is a simple [Javascript Service Worker](https://python.org/) server template running with [WinterJS](https://github.com/wasmerio/winterjs).

> This starter's full tutorial is available [here](https://docs.wasmer.io/edge/quickstart/js-wintercg).

## Usage

Modify the logic of your the Javascript worker in the `src/index.js` file.

You can run the JS Service Worker locally with (check out the [Wasmer install guide](https://docs.wasmer.io/install)):

```bash
wasmer run . --net
```

> [!TIP]
> You can also run `wasmer run wasmer-examples/gatsby-wasmer-starter --net` to run the published package locally

Open [http://localhost:8080](http://localhost:8080) with your browser to see the worker working!


## Deploy on Wasmer Edge

The easiest way to deploy your Javascript Worker is to use the [Wasmer Edge](https://wasmer.io/products/edge).

Live example: https://wasmer-js-worker-starter.wasmer.app/

```bash
wasmer deploy
```

> [!NOTE]
> You will need to change the namespace in `wasmer.toml` to your own namespace and app name in `app.yaml` to your own app name.
