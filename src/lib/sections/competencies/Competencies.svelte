<script lang="ts">
  import Heading from "$lib/headers/Heading.svelte";
  import Subheading from "$lib/headers/Subheading.svelte";
  import TechGrid from "./TechGrid.svelte";
  import {
    siTypescript,
    siJavascript,
    siKotlin,
    siDart,
    siPython,
    siC,
    siHtml5,
    siCss,
    siPostgresql,
    siReact,
    siNextdotjs,
    siSvelte,
    siTailwindcss,
    siBootstrap,
    siPrisma,
    siMongodb,
    siExpress,
    siCypress,
    siGithubactions,
    siGitlab,
    siIntellijidea,
    siTensorflow,
    siImmer,
    siTanstack,
    siNodedotjs,
    siRust,
    siSpring,
    siFlutter,
    siTrpc,
    siSocketdotio,
    siShadcnui,
    siVitest,
    siPytest,
    siDocker,
    siGooglecloud,
    siHibernate,
    siSqlalchemy,
    siSqlite,
    siNumpy,
    siPandas,
    siKnime,
  } from "simple-icons";

  type TechItem = { name: string; svg: string; info?: string };

  const languages: TechItem[] = [
    { name: "TypeScript", svg: siTypescript.svg },
    { name: "JavaScript", svg: siJavascript.svg },
    { name: "Java / Kotlin", svg: siKotlin.svg },
    { name: "Dart", svg: siDart.svg },
    { name: "Python", svg: siPython.svg },
    { name: "C", svg: siC.svg },
    { name: "Rust", svg: siRust.svg },
    { name: "HTML", svg: siHtml5.svg },
    { name: "CSS", svg: siCss.svg },
    { name: "PostgreSQL", svg: siPostgresql.svg },
  ];

  const frontendFrameworks: TechItem[] = [
    { name: "React", svg: siReact.svg },
    { name: "Next.js", svg: siNextdotjs.svg },
    { name: "Svelte", svg: siSvelte.svg },
    { name: "TanStack Query", svg: siTanstack.svg },
    { name: "Immer", svg: siImmer.svg },
    { name: "Spring", svg: siSpring.svg },
    { name: "Flutter", svg: siFlutter.svg },
  ];

  const frontendLibraries: TechItem[] = [
    { name: "TailwindCSS", svg: siTailwindcss.svg },
    { name: "Bootstrap", svg: siBootstrap.svg },
    { name: "tRPC", svg: siTrpc.svg },
    { name: "Socket.IO", svg: siSocketdotio.svg },
    { name: "ShadCN", svg: siShadcnui.svg },
  ];

  const backendAndDb: TechItem[] = [
    { name: "Node.js", svg: siNodedotjs.svg },
    { name: "Express", svg: siExpress.svg },
    { name: "Prisma", svg: siPrisma.svg },
    { name: "MongoDB", svg: siMongodb.svg },
    { name: "Hibernate", svg: siHibernate.svg },
    { name: "SQLAlchemy", svg: siSqlalchemy.svg },
    { name: "SQLite", svg: siSqlite.svg },
  ];

  const tooling: TechItem[] = [
    { name: "Cypress", svg: siCypress.svg },
    { name: "GitHub Actions", svg: siGithubactions.svg },
    { name: "GitLab CI/CD", svg: siGitlab.svg },
    { name: "IntelliJ", svg: siIntellijidea.svg },
    { name: "TensorFlow", svg: siTensorflow.svg },
    { name: "Vitest", svg: siVitest.svg },
    { name: "Pytest", svg: siPytest.svg },
    { name: "Docker", svg: siDocker.svg },
    { name: "Google Cloud", svg: siGooglecloud.svg },
    { name: "NumPy", svg: siNumpy.svg },
    { name: "Pandas", svg: siPandas.svg },
    { name: "KNIME", svg: siKnime.svg },
  ];
</script>

<div id="competencies" class="flex flex-col gap-1">
  <Heading>Competencies</Heading>
  <Subheading>Languages</Subheading>
    <TechGrid items={languages} />

    <br />

    <Subheading>Frameworks, Libraries, Software</Subheading>
    <TechGrid items={frontendFrameworks} />

    <br />

    <Subheading>Frontend Libraries</Subheading>
    <TechGrid items={frontendLibraries} />

    <br />

    <Subheading>Backend & Databases</Subheading>
    <TechGrid items={backendAndDb} />

    <br />

    <Subheading>Testing, Integration & Tools</Subheading>
    <TechGrid items={tooling} />
</div>
