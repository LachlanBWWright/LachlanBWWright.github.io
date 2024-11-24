<script>
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";
  import PortfolioItemHeader from "$lib/items/PortfolioItemHeader.svelte";

  import Carousel from "$lib/carousel/Carousel.svelte";
  import CarouselItem from "$lib/carousel/CarouselItem.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import GitHubLogo from "$lib/icons/GitHubLogo.svelte";
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
        <Carousel>
          <CarouselItem>
            <iframe
              class="w-full h-full"
              src="https://www.youtube.com/embed/1Q-ZASEpHeI?si=2BspDC_boqL3fBAb"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </CarouselItem>
          <CarouselItem>
            <img
              src="portfolio/cryo/Cryo1.png"
              alt="Screenshot of web application."
            />
          </CarouselItem>
        </Carousel>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Pangea Resource Edit</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <div class="grid grid-cols-2 gap-4">
            <WhiteLinkButton
              text="Frontend"
              link="https://github.com/LachlanBWWright/PangeaRSEdit"
              ><GitHubLogo size="{30}" /></WhiteLinkButton
            >
            <WhiteLinkButton
              text="RSRCDump"
              link="https://github.com/LachlanBWWright/rsrcdump"
              ><GitHubLogo size="{30}" /></WhiteLinkButton
            >
          </div>
          <li>
            Developed a React-based level editor for the open-sourced 2001 video
            game “Otto Matic”.
          </li>
          <li>
            Forked and extended the Python “RSRCDump” library for editing MAC OS
            Resource Fork files to support padding bytes, improve support for
            struct arrays and non-CLI access to features.
          </li>
          <li>
            Used Pyodide with the forked library to convert level files to JSON
            and back after modification.
          </li>
          <li>
            Used Konva to create a drag-and-drop interface for editing level
            data
          </li>
        </div>
        <Carousel>
          <CarouselItem>
            <img src="portfolio/pangea/Pangea1.png" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="portfolio/pangea/Pangea2.png" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="portfolio/pangea/Pangea3.png" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="portfolio/pangea/Pangea4.png" alt="" />
          </CarouselItem>
          <CarouselItem>
            <img src="portfolio/pangea/Pangea5.png" alt="" />
          </CarouselItem>
        </Carousel>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Online Exam System</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <WhiteLinkButton
            text="Repository"
            link="https://github.com/LachlanBWWright/T1-Online-Exam-System"
            ><GitHubLogo size="{30}" /></WhiteLinkButton
          >
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
        <Carousel>
          <CarouselItem>
            <img src="portfolio/exam/Exam1.png" alt="Screenshot of website." />
          </CarouselItem>
        </Carousel>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Deal Scanner</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <WhiteLinkButton
            text="Repository"
            link="https://github.com/LachlanBWWright/LBWW-Deal-Scanner"
            ><GitHubLogo size="{30}" /></WhiteLinkButton
          >
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
        <Carousel>
          <CarouselItem>
            <img src="portfolio/deals/Deals1.png" alt="Screenshot of code." />
          </CarouselItem>
        </Carousel>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>MERN Mafia</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <div class="grid grid-cols-2 gap-4">
            <WhiteLinkButton
              text="React DOM"
              link="https://github.com/LachlanBWWright/MERN-Mafia"
              ><GitHubLogo size="{30}" /></WhiteLinkButton
            >
            <WhiteLinkButton
              text="React Native"
              link="https://github.com/LachlanBWWright/MERN-Mafia-Mobile"
              ><GitHubLogo size="{30}" /></WhiteLinkButton
            >
          </div>
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
        <Carousel>
          <CarouselItem>
            <iframe
              class="w-full h-full"
              src="https://www.youtube.com/embed/odZuaUu2I3c?si=Pwt6HkQCBgARhmR5"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </CarouselItem>
          <CarouselItem>
            <img
              src="portfolio/mafia/Mafia1.png"
              alt="Screenshot of web application."
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="portfolio/mafia/Mafia2.png"
              alt="Screenshot of web application."
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="portfolio/mafia/Mafia3.png"
              alt="Screenshot of web application."
            />
          </CarouselItem>
        </Carousel>
      </PortfolioBody>
    </PortfolioCard>
    <PortfolioCard>
      <PortfolioItemHeader>
        <p>Public Transport App</p>
      </PortfolioItemHeader>
      <PortfolioBody>
        <div>
          <WhiteLinkButton
            text="Repository"
            link="https://github.com/LachlanBWWright/Flutter_Timetable"
            ><GitHubLogo size="{30}" /></WhiteLinkButton
          >
          <li>
            Developed a mobile application for viewing public transportation
            timetables in NSW.
          </li>
          <li>Developed interfaces with Transport for NSW’s OpenData API.</li>
        </div>
        <Carousel>
          <CarouselItem>
            <img
              class="max-h-96"
              src="portfolio/timetable/Timetable1.png"
              alt="Screenshot of application."
            />
          </CarouselItem>
          <CarouselItem>
            <img
              class="max-h-96"
              src="portfolio/timetable/Timetable2.png"
              alt="Screenshot of application."
            />
          </CarouselItem>
          <CarouselItem>
            <img
              class="max-h-96"
              src="portfolio/timetable/Timetable3.png"
              alt="Screenshot of application."
            />
          </CarouselItem>
        </Carousel>
      </PortfolioBody>
    </PortfolioCard>
  </div>
</div>
