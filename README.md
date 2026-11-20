# Mobiscroll React TypeScript Demos

This repository consists of demos from the [Mobiscroll website](https://demo.mobiscroll.com/).
It is meant to be a learning resource and a quick way to start working with Mobiscroll UI components (and beyond).

## Required steps to run the project locally:

1. If not signed up yet, or don't own a license, you can [start a free trial](https://mobiscroll.com/starttrial). You can also start it on the sign-in page in step 4: without a license, the CLI installs the trial.

2. Clone the repository:

   ```
   git clone https://github.com/acidb/mobiscroll-demos-react-ts.git
   ```

3. If not installed yet, install the Mobiscroll CLI from NPM:

   ```
   npm install -g @mobiscroll/cli
   ```

4. Config Mobiscroll UI - open a terminal window in the root directory and run:

   ```
   mobiscroll config react
   ```

   The command prints a sign-in link and a code; press Enter to open the link in your browser, log in and approve. Using an AI agent? Have it run `mobiscroll config react --yes --no-wait`: it prints a sign-in link and a code for you to approve, and after you approve, the agent runs the same command again. The agent never approves the sign-in itself, never asks for your password and never runs `npm login`.

5. Install dependencies - open a terminal window in the root directory and run:

   ```
   npm install
   ```

6. Run the project:

   ```
   npm run dev
   ```

## License

The demo source code in this repository is licensed under the [MIT License](LICENSE). This does not extend to the Mobiscroll components themselves, which remain under Mobiscroll's commercial license — a trial or paid license is required to run these demos, as described above.

_Have you encountered any issues or do you have feedback regarding the demos? Feel free to contact us via our [ticketing system](https://mobiscroll.com/account/supporttickets) or website chat. Alternatively, you can also submit your questions to our [Community Forum](https://forum.mobiscroll.com/)._
