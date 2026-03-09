# Static Build

This project has a separate offline-safe static export flow that does not change the normal app behavior.

## Build

Run:

```bash
npm run build:static
```

Output folder:

```text
home/
```

Static export URL base:

```text
/home/
```

## Local Windows Preview

From the project root:

```bash
py -m http.server 8080
```

Open:

```text
http://127.0.0.1:8080/home/
```

## Ubuntu VM Preview

Copy the generated `home` folder to the VM and serve the parent directory:

```bash
python3 -m http.server 8080
```

Open:

```text
http://<vm-ip>:8080/home/
```

## Notes

- Normal source app remains unchanged for `npm run dev` and `npm run build`.
- Static mode hides routes that need runtime APIs, login flows, dashboards, or internet-dependent media embeds.
- Exported assets are local, so the package can run on an offline VM after the build is copied.
