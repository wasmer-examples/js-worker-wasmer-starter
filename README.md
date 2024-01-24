This is a simple [Javascript Service Worker](https://python.org/) server template running with [WinterJS](https://github.com/wasmerio/winterjs).

> This starter's full tutorial is available [here](https://docs.wasmer.io/edge/quickstart/js-wintercg).

## Usage

Modify the logic of your simple Python HTTP server in the `src/index.js` file.

```bash
wasmer run . --net
```

> [!NOTE]
> You will need to have Wasmer installed (check out [the docs to install the Wasmer CLI](https://docs.wasmer.io/install)!). 
> The `--net` flag is required to enable networking support in Wasmer.

This command will start an HTTP server on port 8080. You can send a request to `http://localhost:8080`.

## Deploy on Wasmer Edge

The easiest way to deploy your Javascript Worker is to use the [Wasmer Edge](https://wasmer.io/products/edge).

Live example: http://wasmer-js-worker-starter.wasmer.app/

```bash
wasmer deploy
```

> [!NOTE]
> You will need to change the namespace in `wasmer.toml` to your own namespace and app name in `app.yaml` to your own app name.
