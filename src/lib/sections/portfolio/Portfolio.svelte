<script>
  import PortfolioBody from "$lib/items/PortfolioBody.svelte";
  import PortfolioCard from "$lib/items/PortfolioCard.svelte";

  import Carousel from "$lib/carousel/Carousel.svelte";
  import CarouselItem from "$lib/carousel/CarouselItem.svelte";
  import WhiteLinkButton from "$lib/buttons/WhiteLinkButton.svelte";
  import Card from "$lib/cards/Card.svelte";
  import Heading from "$lib/headers/Heading.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
</script>

<div id="portfolio" class="flex flex-col gap-2">
  <Heading>Portfolio</Heading>
  <Card>
    <div class="grid grid-cols-1 gap-6">
      <PortfolioCard>
        <Subheading>Cryogenic Wiring Simulation</Subheading>
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
        <Subheading>Pangea Resource Edit</Subheading>
        <PortfolioBody>
          <div class="flex flex-col">
            <div class="grid grid-cols-2 gap-4">
              <WhiteLinkButton
                text="Frontend"
                link="https://github.com/LachlanBWWright/PangeaRSEdit"
              />
              <WhiteLinkButton
                text="RSRCDump"
                link="https://github.com/LachlanBWWright/rsrcdump"
              />
            </div>
            <li>
              Developed a React-based level editor for the open-sourced Pangea
              Software games, notable for being bundled with Macintosh computers
              in the late 90s and early 2000s, and later being ported as some of
              the earlies iOS games.
            </li>
            <li>
              Forked and extended the Python “RSRCDump” library for editing MAC
              OS Resource Fork files to support padding bytes, improve support
              for struct arrays and non-CLI access to features.
            </li>
            <li>
              Used Pyodide with the forked library to convert level files to
              JSON and back after modification.
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
            <CarouselItem>
              <img src="portfolio/pangea/Pangea6.png" alt="" />
            </CarouselItem>
          </Carousel>
        </PortfolioBody>
      </PortfolioCard>
      <!-- Android Ports section added after Pangea Resource Edit -->
      <PortfolioCard>
        <Subheading>Android Ports</Subheading>
        <PortfolioBody>
          <div class="flex flex-col">
            <div class="grid grid-cols-2 gap-4">
              <WhiteLinkButton
                text="Otto Matic"
                link="https://github.com/LachlanBWWright/OttoMatic-Android"
              />
              <WhiteLinkButton
                text="Billy Frontier"
                link="https://github.com/LachlanBWWright/BillyFrontier-Android"
              />
              <WhiteLinkButton
                text="Bugdom"
                link="https://github.com/LachlanBWWright/Bugdom-android"
              />
              <WhiteLinkButton
                text="Bugdom 2"
                link="https://github.com/LachlanBWWright/Bugdom2-Android"
              />
              <WhiteLinkButton
                text="Cro-Mag Rally"
                link="https://github.com/LachlanBWWright/CroMagRally-Android"
              />
              <WhiteLinkButton
                text="Mighty Mike"
                link="https://github.com/LachlanBWWright/MightyMike-Android"
              />
              <WhiteLinkButton
                text="Nanosaur"
                link="https://github.com/LachlanBWWright/Nanosaur-android"
              />
              <WhiteLinkButton
                text="Nanosaur 2"
                link="https://github.com/LachlanBWWright/Nanosaur2-Android"
              />
            </div>
            <li>
              A collection of games from Pangea Software ported to Android.
            </li>
          </div>
          <Carousel>
            <CarouselItem>
              <img src="portfolio/androidPorts/OttoMatic.jpg" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="portfolio/androidPorts/BillyFrontier.jpg" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="portfolio/androidPorts/Bugdom1.jpg" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="portfolio/androidPorts/Bugdom2.jpg" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="portfolio/androidPorts/Nanosaur1.jpg" alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src="portfolio/androidPorts/Nanosaur2.jpg" alt="" />
            </CarouselItem>
          </Carousel>
        </PortfolioBody>
      </PortfolioCard>
      <PortfolioCard>
        <Subheading>Online Exam System</Subheading>
        <PortfolioBody>
          <div class="flex flex-col">
            <WhiteLinkButton
              text="Repository"
              link="https://github.com/LachlanBWWright/T1-Online-Exam-System"
            />
            <li>
              Created a mock website for the online invigilation of exams.
            </li>
            <li>
              Used NextJS, tRPC, Prisma, Tailwind CSS, NextAuthJS libraries.
            </li>
            <li>
              Made comprehensive contributions across the entire technological
              stack.
            </li>
            <li>
              Provided advice, feedback, guidance, and performed code reviews in
              a collaborative environment.
            </li>
          </div>
          <Carousel>
            <CarouselItem>
              <img
                src="portfolio/exam/Exam1.png"
                alt="Screenshot of website."
              />
            </CarouselItem>
          </Carousel>
        </PortfolioBody>
      </PortfolioCard>
      <PortfolioCard>
        <Subheading>Deal Scanner</Subheading>
        <PortfolioBody>
          <div class="flex flex-col">
            <WhiteLinkButton
              text="Repository"
              link="https://github.com/LachlanBWWright/LBWW-Deal-Scanner"
            />
            <li>
              Developed a NodeJS-based application written in TypeScript,
              utilising Puppeteer, Axios, and Mongoose NPM packages.
            </li>
            <li>
              Collected information from retailers with Puppeteer and Axios,
              sending a chat-app notification if a deal is found.
            </li>
            <li>
              Utilised MongoDB to store search queries for specific retailers,
              to be automatically scanned periodically.
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
        <Subheading>LBWW Mafia</Subheading>
        <PortfolioBody>
          <div class="flex flex-col">
            <div class="grid grid-cols-1 gap-4">
              <WhiteLinkButton
                text="Repository"
                link="https://github.com/LachlanBWWright/MERN-Mafia"
              />
            </div>
            <li>
              Created an online chat-based game built with a MERN stack,
              alongside a React Native app as an alternate frontend.
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
        <Subheading>Public Transport App</Subheading>
        <PortfolioBody>
          <div class="flex flex-col">
            <WhiteLinkButton
              text="Repository"
              link="https://github.com/LachlanBWWright/Flutter_Timetable"
            />
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
  </Card>
</div>
