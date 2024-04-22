## LLM Code Completion Evaluation in Web Application Frameworks (LLMWAF)
This repository explores the effectiveness of large language models (LLMs) for code completion within web application frameworks. It analyses the performance of three popular LLMs (Claude, Gemini, GPT-3.5) on a set of front-end development tasks in Next.js and SvelteKit.

### Requirements
- Node.js v20.12.2
- Yarn package manager (`npm install -g yarn` if not already installed)

### Getting started

#### Clone the repository
```
git clone https://github.com/ktnsdev/llmwaf
```

#### Install dependencies
```
cd ./llmwaf
cd ./angular; yarn
cd ../react; yarn
cd ../sveltekit; yarn
```

#### Try running the applications:

Run the applications in development mode using the commands:

**For Angular**
```
yarn start
```

**For React and Svelte**
```
yarn dev
```

#### Try running tests (optional):

Once the required dependencies have been installed, you can run the tests by:

```
cd <framework>
yarn test
```

To see the results of each test, run:

```
cd <framework>
yarn test --verbose
```

### Project structure
```
├── angular/
│   ├── ...
│   └── src/
│       ├── ...
│       ├── __tests__/         // test files
│       └── app/
│           ├── ...
│           ├── templates/     // all task templates including prompts
│           └── results/       // record results here - tests will be run on the components in this folder
│
├── react/
│   ├── ...
│   ├── __tests__/             // test files
│   └── app/
│       ├── ...
│       ├── possible-answers/  // possible answers for each task
│       ├── templates/         // all task templates including prompts
│       └── results/           // record results here - tests will be run on the components in this folder
│
└── sveltekit/
    ├── ...
    └── src/
        ├── ...
        ├── __tests__/         // test files
        └── routes/
            ├── ...
            ├── templates/     // all task templates including prompts
            └── results/       // record results here - tests will be run on the components in this folder
```

#### Templates
Each template contains:
- template file: `page.tsx`, `+page.svelte`, or `*.component.css|html|ts` for React, Svelte, and Angular respectively, and
- `prompt.md` file, containing the task's prompt(s).

### Recording the results
It is suggested to record the results in the `results` folder. For tasks that have subsequent sub-tasks, there are separate folders denoted with a number.
