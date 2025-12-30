import { useState } from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Why IT Skills Are Essential Today",
    summary: "Building IT skills opens doors to modern career opportunities.",
    content:
      "In the modern workplace, IT skills are no longer optional—they’re essential. From software development to network management, understanding technology equips you to solve real-world problems efficiently. Learning IT also enhances your adaptability in a rapidly evolving job market."
  },
  {
    id: 2,
    title: "The Benefits of Online Learning for Professionals",
    summary: "Flexible, self-paced learning helps you grow your career.",
    content:
      "Online learning allows professionals to acquire new skills without disrupting their daily schedules. Platforms like BrightPath offer courses in coding, data analytics, and cybersecurity that you can complete at your own pace. This approach ensures continuous skill development and better career prospects."
  },
  {
    id: 3,
    title: "Top Emerging IT Careers in 2025",
    summary: "Explore high-demand roles like cloud computing and cybersecurity.",
    content:
      "Technology is reshaping the job market. Careers in cloud computing, artificial intelligence, and cybersecurity are seeing exponential growth. By focusing on these areas, learners can secure positions that are both lucrative and future-proof."
  },
  {
    id: 4,
    title: "How Hands-On Projects Accelerate Learning",
    summary: "Practical exercises reinforce theoretical knowledge.",
    content:
      "Theory alone isn’t enough. Projects, mini apps, and simulations allow learners to apply their knowledge immediately. This hands-on approach strengthens understanding, builds confidence, and makes your portfolio attractive to employers."
  },
  {
    id: 5,
    title: "Data Literacy: A Must-Have Skill",
    summary: "Understanding data empowers better decision-making.",
    content:
      "Data literacy is a crucial skill for professionals across industries. Being able to clean, analyze, and visualize data helps you make informed decisions, solve problems efficiently, and communicate insights effectively to your team or clients."
  },
  {
    id: 6,
    title: "The Importance of Cybersecurity Awareness",
    summary: "Protecting digital assets is key for everyone.",
    content:
      "With growing reliance on digital systems, cybersecurity awareness is critical. Knowing how to safeguard personal and organizational data prevents breaches, protects reputations, and ensures smooth operation in today’s digital economy."
  },
  {
    id: 7,
    title: "The Role of Cloud Computing in Modern IT",
    summary: "Cloud skills are crucial for scalable and flexible solutions.",
    content:
      "Cloud computing is now central to modern IT infrastructure. Learning cloud platforms like AWS, Azure, or Google Cloud enables professionals to deploy scalable applications, manage virtual servers, and optimize resources efficiently, giving a competitive edge in the job market."
  },
  {
    id: 8,
    title: "Artificial Intelligence: Shaping the Future",
    summary: "AI knowledge opens doors to innovative IT opportunities.",
    content:
      "Artificial intelligence and machine learning are transforming industries from healthcare to finance. Gaining AI skills allows learners to develop intelligent systems, automate processes, and contribute to innovative solutions that shape the future of technology."
  },
  {
    id: 9,
    title: "Networking Skills Every IT Professional Needs",
    summary: "Understanding networks ensures smooth and secure connectivity.",
    content:
      "Networking is the backbone of IT infrastructure. Learning about routers, switches, protocols, and network security equips professionals to design, maintain, and troubleshoot robust networks, ensuring efficient and secure connectivity in organizations."
  },
  {
    id: 10,
    title: "DevOps: Bridging Development and Operations",
    summary: "DevOps practices improve software delivery and collaboration.",
    content:
      "DevOps combines software development and IT operations to accelerate deployment cycles. Learning DevOps tools and practices—like CI/CD, containerization, and automation—helps professionals deliver high-quality software efficiently and fosters better collaboration between teams."
  }
];

export default function Blog() {
  const [expandedPostId, setExpandedPostId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  return (
    <div className="blog-page">
      <h1 className="blog-title">Our Blog</h1>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            {expandedPostId === post.id && <p className="blog-content">{post.content}</p>}
            <button onClick={() => toggleReadMore(post.id)}>
              {expandedPostId === post.id ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
