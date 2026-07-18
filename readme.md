# MyTrash_App

MyTrash_App is a lightweight mobile marketplace and local waste-exchange app. It pairs a React Native (Expo) mobile client with a Node.js (Express) backend. The server provides REST APIs, file uploads, and Firebase integration for authentication and storage.

Quick summary
- Frontend: `mobile/` — React Native (Expo) app with screens for browsing, selling, chat, orders, and account management.
- Backend: `server/` — Express server that exposes APIs and handles uploads; uses Firebase Admin for backend operations.

Minimal run instructions

Server
1. Open a terminal and go to the server folder:

```bash
cd server
```
2. Install dependencies:

```bash
npm install
```
3. Provide credentials/config (create `.env` or set env vars). If the repo's Firebase JSON is used for local development, set:

```bash
export GOOGLE_APPLICATION_CREDENTIALS=./mytrash-29376-firebase-adminsdk-1mpnm-bcc2249c40.json
# (Windows PowerShell)
$env:GOOGLE_APPLICATION_CREDENTIALS="./mytrash-29376-firebase-adminsdk-1mpnm-bcc2249c40.json"
```
4. Start the server:

```bash
node server.js
# or
npm start
```

Mobile (Expo)
1. Open a terminal and go to the mobile folder:

```bash
cd mobile
```
2. Install dependencies:

```bash
npm install
```
3. Start Expo:

```bash
npx expo start
```
4. Open on a simulator or a physical device using the Expo app. If using a physical device, ensure the mobile app's API base URL in `mobile/config.js` points to your machine's LAN IP so it can reach the server.

Notes
- Do not commit secrets or production Firebase credentials. Remove or rotate the included JSON keys before publishing.
- If the app cannot reach the server from a device, prefer using the machine's LAN IP instead of `localhost`.

If you want, I can make this even shorter (one-paragraph) or add example `.env` variables. 
# MyTrash_App

Simple local project containing a React Native mobile app (`mobile/`) and an Express backend (`server/`).

## Structure
- `mobile/` — React Native (Expo) client
- `server/` — Express backend, MongoDB, Firebase Admin integration

## Quick start

1. Create a local server env file

```bash
cd server
cp .env.example .env
# Open server/.env and fill real secrets (do NOT commit .env)
```

Recommended values to set in `server/.env`:
- `API_KEY` — Sendinblue API key
- `MONGODB_URI` — MongoDB connection string
- `GOOGLE_APPLICATION_CREDENTIALS` — path to Firebase service account JSON, or set `GOOGLE_SERVICE_ACCOUNT_JSON` with the full JSON if needed

2. Install dependencies and run server

```bash
cd server
npm install
node server.js
# or use your process manager: PORT=5000 node server.js
```

3. Run the mobile app (Expo)

```bash
cd mobile
npm install
npm run start   # or `expo start` if using Expo
```

## Secrets and safety
- The repository previously contained committed secrets (Firebase service account JSON, Sendinblue API key, Google API key). Those were redacted from tracked files and replaced with placeholders.
- You must rotate/revoke those exposed credentials immediately:
  - Revoke the Firebase service account key in Google Cloud Console.
  - Regenerate the Sendinblue API key.
  - Rotate MongoDB user/password.

## Purging history (optional, required to fully remove secrets from GitHub)
To remove sensitive files from Git history, run one of these from a fresh clone and then force-push:

Using `git-filter-repo` (recommended):

```bash
git clone --mirror https://github.com/your/repo.git
cd repo.git
git filter-repo --invert-paths --path server/mytrash-29376-firebase-adminsdk-1mpnm-bcc2249c40.json --path mobile/mytrash-29376-firebase-adminsdk-1mpnm-bcc2249c40.json --path mobile/google-services.json --path server/.env
git push --force
```

Using BFG:

```bash
git clone --mirror https://github.com/your/repo.git
java -jar bfg.jar --delete-files '{server/.env,server/mytrash-29376-firebase-adminsdk-1mpnm-bcc2249c40.json,mobile/mytrash-29376-firebase-adminsdk-1mpnm-bcc2249c40.json,mobile/google-services.json}' repo.git
cd repo.git
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push --force
```

## If you want me to proceed
- I can run the history purge and force-push for you (I will need confirmation).  This rewrites history and requires all collaborators to re-clone.
- Or I can provide step-by-step rotation commands for each provider.
