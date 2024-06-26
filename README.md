# Proxmox Helper Scripts

# Update: since making the repo public. tteck has run away with the website and has ceased all communication. For the most up-to-date website with the best features and security, please use the site linked to the repository. Thank you.

Official re-design of the Proxmox VE helper-script website.

Feel free to fork the project or post feedback in the [Discussion tab](https://github.com/BramSuurdje/proxmox-helper-scripts/discussions). Your feedback is always welcome.

## How to Contribute

First, install the dependencies:

```bash
npm install
# or 
yarn install
# or
pnpm install
# or
bun install
```

Next, run the Docker container to host your own PocketBase instance:

```bash
docker compose up -d
```

Head over to `localhost:8080` and register with random details (they will be overwritten later). Apply the `pb_backup.zip` included in the repo.

You will be logged out from your PocketBase instance. Log in again with the following details:
- Email: `example@example.com`
- Password: `changeme123`

Finally, rename `example.env` to `.env`.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
