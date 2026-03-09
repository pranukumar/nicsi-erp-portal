Use the exported `home` folder from:

```bash
npm run build:static
```

The Nginx target is always the same URL base:

```text
/home/
```

## Windows Nginx

Use [nicsi-home-windows.conf](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/docs/nginx/nicsi-home-windows.conf).

Recommended folder layout:

```text
D:/deploy/nicsi/home/
  index.html
  _next/
  images/
  logos/
  icons/
  pdfs/
```

Steps:

```text
1. Copy the generated `home` folder to `D:/deploy/nicsi/home`
2. Copy `docs/nginx/nicsi-home-windows.conf` into `conf/servers/nicsi-home.conf` inside your Nginx install
3. If your folder path is different, update the `root D:/deploy/nicsi;` line
4. Start or reload Nginx
```

Example commands from the Nginx folder:

```bash
nginx.exe -t
nginx.exe -s reload
```

Open:

```text
http://localhost/home/
```

## Ubuntu VM Nginx

Use [nicsi-home.conf](/d:/office/NICSI/erp/react/nicsi-erp-portal/nicsi-erp-portal/docs/nginx/nicsi-home.conf).

Recommended folder layout:

```text
/var/www/nicsi/home/
  index.html
  _next/
  images/
  logos/
  icons/
  pdfs/
```

Commands:

```bash
sudo mkdir -p /var/www/nicsi
sudo cp -r home /var/www/nicsi/
sudo cp docs/nginx/nicsi-home.conf /etc/nginx/sites-available/nicsi-home
sudo ln -s /etc/nginx/sites-available/nicsi-home /etc/nginx/sites-enabled/nicsi-home
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

Open:

```text
http://10.24.252.33/home/
```

## Notes

- This is for the static `home` export only.
- Normal dynamic app deployment is different.
- The exported package works on an offline VM after the `home` folder is copied there.
