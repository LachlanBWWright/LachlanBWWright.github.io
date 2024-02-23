<script>
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import PortfolioItemHeader from "$lib/items/PortfolioItemHeader.svelte";
</script>

<div id="portfolio" class="flex flex-col gap-2">
  <p class="text-3xl text-center">Portfolio</p>
  <div class="grid grid-cols-1 gap-1">
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Cryogenic Wiring Simulation</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <li>
            Created a React website to provide a visual means of interfacing
            with an existing Python model.
          </li>
          <li>
            Used Pyodide to allow interactions with the Python model to be
            performed on the client-side.
          </li>
          <li>
            Utilised the Python-based Flask for hosting, allowing for
            interactions with the model over a REST API.
          </li>
          <li>
            Utilised the Recharts library for React to visually depict the
            model’s outputs.
          </li>
        </div>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Online Exam System</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <li>Created a mock website for the online invigilation of exams.</li>
          <li>
            Used NextJS, tRPC, Prisma, Tailwind CSS, NextAuthJS libraries.
          </li>
          <li>
            Made comprehensive contributions across the entire technological
            stack.
          </li>
          <li>
            Provided advice, feedback, guidance, and performed code reviews in a
            collaborative environment.
          </li>
        </div>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Deal Scanner</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <li>
            Developed a NodeJS-based application written in TypeScript,
            utilising Puppeteer, Axios, and Mongoose NPM packages.
          </li>
          <li>
            Collected information from retailers with Puppeteer and Axios,
            sending a chat-app notification if a deal is found.
          </li>
          <li>
            Utilised MongoDB to store search queries for specific retailers, to
            be automatically scanned periodically.
          </li>
        </div>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>MERN Mafia</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <li>
            Created an online chat-based game built with a MERN stack, alongside
            a React Native app as an alternate frontend.
          </li>
          <li>
            Used JavaScript and Bootstrap to construct the MERN Stack, and
            TypeScript to construct the React Native application.
          </li>
          <li>
            Constructed an object-oriented backend for handling game logic,
            making use of polymorphism.
          </li>
          <li>
            Implemented the SocketIO package for handling user-server
            communication using WebSocket connections.
          </li>
          <li>
            Utilised ReCAPTCHA V3 verification and interfaced with a MongoDB
            Database using Mongoose.
          </li>
        </div>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Public Transport App</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <li>
            Developed a mobile application for viewing public transportation
            timetables in NSW.
          </li>
          <li>Developed interfaces with Transport for NSW’s OpenData API.</li>
        </div>
      </PortfolioBody>
    </PortfolioCard>
  </div>
</div>
