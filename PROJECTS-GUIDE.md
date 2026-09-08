# How to Add a New Project

Project information is managed in one beginner-friendly file:

`src/data/projects.ts`

You do not need to edit `App.tsx` or the project card component.

## Step 1 — Take your project screenshot

Take a clear screenshot or export a design image. PNG, JPG/JPEG, WebP, and SVG are supported. Keep filenames simple and lowercase, such as:

- `paylink.png`
- `arise-ict-hub.jpg`
- `royalty-learning-platform.webp`

Avoid spaces, special characters, and inconsistent capitalization in filenames.

## Step 2 — Put the image in the project folder

Copy the image into:

`public/images/projects/`

Then use this path in the data file:

`/images/projects/paylink.png`

## Step 3 — Open the project data file

Open `src/data/projects.ts` and add a new object inside the `projects` array.

## Step 4 — Copy this project template

```ts
{
  id: 'my-project',
  title: 'My Project',
  description: 'Short description of the project.',
  impact: 'Optional sentence explaining the project purpose.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  image: '/images/projects/my-project.png',
  liveUrl: 'https://my-project.vercel.app',
  githubUrl: 'https://github.com/username/my-project',
  featured: false,
  category: 'Web Development',
}
```

Only enter technologies you actually used for that project.

## Step 5 — Change the project name

Replace the value of `title` with the real project name.

## Step 6 — Change the description

Replace `description` with a short explanation of what the project does. `impact` is optional and can be removed if you do not need it.

## Step 7 — Add technologies

Update `technologies` with the technologies actually used for this specific project. Do not copy the portfolio's full skill list.

## Step 8 — Add the image

Set `image` to the exact filename path inside `public/images/projects/`. Linux hosting is case-sensitive, so the spelling and capitalization must match.

## Step 9 — Add the live URL

Deploy the project first, then copy its URL into `liveUrl`, for example:

`liveUrl: 'https://my-project.vercel.app'`

### What goes into `liveUrl` and `githubUrl`?

`liveUrl` must be the complete public website URL where someone can immediately open and use your deployed project.

Valid examples:

```ts
liveUrl: 'https://my-project.vercel.app'
liveUrl: 'https://my-project.netlify.app'
liveUrl: 'https://username.github.io/my-project/'
```

Do not paste a GitHub repository URL, `localhost` URL, project folder path, Vercel or Netlify dashboard URL, editor URL, or admin URL into `liveUrl`.

`githubUrl` must be the complete public URL of that project's GitHub repository:

```ts
githubUrl: 'https://github.com/username/my-project'
```

Do not paste your GitHub profile URL, a dashboard URL, a Vercel URL, or the live project URL into `githubUrl`.

The rule is:

- LIVE PROJECT -> `liveUrl`
- SOURCE CODE -> `githubUrl`

For example, if you deploy `My Portfolio App` to Vercel and receive `https://my-portfolio-app.vercel.app`, put that URL in `liveUrl`. If its source code is at `https://github.com/davidanthony/my-portfolio-app`, put that repository URL in `githubUrl`. These are examples only; replace them with your actual URLs.

The portfolio does not host your project. You can deploy it with Vercel, Netlify, GitHub Pages, Firebase Hosting, or another legitimate host. After deployment, copy the provided URL into `liveUrl`.

When `liveUrl` has a value, the project card automatically displays a View project button that opens that exact URL in the current tab. Leave it empty until deployment is complete. Do not use an image path as `liveUrl`; image paths belong only in `image`.

## Step 10 — Add GitHub

If the project has a public repository, paste it into `githubUrl`:

`githubUrl: 'https://github.com/username/my-project'`

If there is no public repository, use `githubUrl: ''`. The GitHub button will not appear. The GitHub button also opens in the current tab.

## Step 11 — Test

Run the portfolio locally, then check that:

- The image appears.
- The project card appears.
- View project opens the correct live URL.
- GitHub opens the correct repository when supplied.
- Empty URLs do not create dead links.
- The production build succeeds with `npm run build`.

Do not use fake URLs, `#`, `example.com`, or invented repositories.
