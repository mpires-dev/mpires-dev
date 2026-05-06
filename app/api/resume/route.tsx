import { NextResponse } from "next/server";
import { renderToBuffer, Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10,
    color: "#111",
    padding: "40 50",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#000",
  },
  tagline: {
    fontSize: 11,
    color: "#555",
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: "row",
    gap: 16,
    fontSize: 9,
    color: "#666",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d1d5db",
    paddingBottom: 4,
  },
  experienceBlock: {
    marginBottom: 14,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#000",
  },
  jobMeta: {
    fontSize: 9,
    color: "#555",
  },
  companyLine: {
    fontSize: 10,
    color: "#333",
    marginBottom: 4,
  },
  description: {
    fontSize: 9.5,
    color: "#444",
    lineHeight: 1.5,
  },
  techRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 4,
  },
  techTag: {
    fontSize: 8,
    backgroundColor: "#f3f4f6",
    color: "#444",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillGroup: {
    width: "30%",
    marginBottom: 8,
  },
  skillCategory: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 3,
  },
  skillItem: {
    fontSize: 9,
    color: "#555",
    lineHeight: 1.5,
  },
});

const experience = [
  {
    period: "2023 – Present",
    title: "Senior Fullstack Developer",
    company: "Freelance / Independent Contractor",
    location: "Remote",
    description:
      "Building AI-powered products and high-growth platforms as an independent contractor. Architecting TypeScript/Node.js backends, React frontends, and integrating LLM-based features.",
    techStack: ["Next.js", "TypeScript", "Node.js", "OpenAI", "AWS", "Vercel"],
  },
  {
    period: "Mar 2022 – Mar 2023",
    title: "Fullstack Developer",
    company: "Devopness",
    location: "Remote — Brazil",
    description:
      "Shipped features across the cloud infrastructure platform. Built dashboard UI, improved CI/CD pipeline integrations, and contributed to the Node.js backend.",
    techStack: ["React", "TypeScript", "Node.js", "Docker", "AWS"],
  },
  {
    period: "Mar 2022 – Mar 2023",
    title: "Frontend Developer",
    company: "Tech4Humans",
    location: "Remote — Brazil",
    description:
      "Developed customer-facing interfaces for the conversational AI and customer service automation platform. Built reusable component systems and improved chat widget performance.",
    techStack: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
  },
  {
    period: "Mar 2022 – Mar 2023",
    title: "Frontend Developer",
    company: "Movidesk",
    location: "Joinville, SC — Brazil",
    description:
      "Contributed to the omnichannel communication platform, building rich chat and helpdesk interfaces used by thousands of enterprise customers.",
    techStack: ["React", "JavaScript", "Redux", "Webpack", "Jest"],
  },
  {
    period: "2021 – 2022",
    title: "Fullstack Developer",
    company: "iFood",
    location: "São Paulo, SP — Brazil",
    description:
      "Contributed to internal tools and consumer-facing features at Brazil's leading food delivery platform in a high-scale environment.",
    techStack: ["React", "TypeScript", "Node.js", "Kotlin", "Redis", "Kafka"],
  },
  {
    period: "2019 – 2021",
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "Brazil",
    description:
      "Built web interfaces and design systems for digital products. First professional role bridging design and engineering.",
    techStack: ["React", "JavaScript", "CSS", "HTML"],
  },
];

const skills = [
  { category: "Languages", items: "TypeScript, JavaScript, SQL, Kotlin" },
  { category: "Frontend", items: "React, Next.js, Tailwind CSS, Storybook" },
  { category: "Backend", items: "Node.js, NestJS, Express, REST, GraphQL" },
  { category: "Infrastructure", items: "Docker, AWS, Vercel, Redis, Kafka" },
  { category: "AI / LLM", items: "OpenAI SDK, LangChain, Prompt Engineering, RAG" },
  { category: "Practices", items: "TDD, CI/CD, Monorepo, Domain-Driven Design" },
];

function ResumePDF() {
  return (
    <Document title="Matheus Pires — Resume" author="Matheus Pires">
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Matheus Pires</Text>
          <Text style={styles.tagline}>
            Senior Fullstack Developer · TypeScript · React · Node.js · AI
          </Text>
          <View style={styles.contactRow}>
            <Text>ferreiramatheus48@gmail.com</Text>
            <Text>linkedin.com/in/matheusfpires</Text>
            <Text>github.com/theoxys</Text>
            <Text>mpires.dev</Text>
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.description}>
            Fullstack Developer with 7+ years of experience building TypeScript-first, AI-powered products.
            Background spans food-tech (iFood), cloud infrastructure (Devopness), omnichannel SaaS (Movidesk),
            and conversational AI (Tech4Humans). I ship fast, write maintainable code, and care deeply about
            the products I help build.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((job, i) => (
            <View key={i} style={styles.experienceBlock}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>{job.title}</Text>
                <Text style={styles.jobMeta}>{job.period}</Text>
              </View>
              <Text style={styles.companyLine}>
                {job.company} · {job.location}
              </Text>
              <Text style={styles.description}>{job.description}</Text>
              <View style={styles.techRow}>
                {job.techStack.map((t) => (
                  <Text key={t} style={styles.techTag}>
                    {t}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsGrid}>
            {skills.map((s) => (
              <View key={s.category} style={styles.skillGroup}>
                <Text style={styles.skillCategory}>{s.category}</Text>
                <Text style={styles.skillItem}>{s.items}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.experienceBlock}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>Computer Science / Information Systems</Text>
              <Text style={styles.jobMeta}>2017 – 2021</Text>
            </View>
            <Text style={styles.companyLine}>Brazil</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export async function GET() {
  const buffer = await renderToBuffer(<ResumePDF />);

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="matheus-pires-resume.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
