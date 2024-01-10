# js-worker-wasmer-starter

A JavaScript Worker starter using [WinterJS](https://github.com/wasmerio/winterjs).
This starter's full tutorial is available [here](https://docs.wasmer.io/edge/quickstart/js-wintercg).

## Usage

### 1. Install the `wasmer` CLI

```bash
curl https://get.wasmer.io -sSfL | sh
```

### 2. Clone this repository

```bash
git clone https://github.com/wasmer-examples/js-worker-wasmer-starter.git
```

### 3. Add your JavaScript Worker

You can change the code in `src/index.js`.

### 4. Run the JavaScript Worker

```bash
wasmer run .
```

You will get the output from the JavaScript Worker.

### 5. Deploy the JavaScript Worker

```bash
wasmer deploy
```

> You will need to change the namespace in `wasmer.toml` to your own namespace and app name in `app.yaml` to your own app name.
