export default function Services() {

  
const featureSections = [
  {
    title: "Unified Dashboard",
    body:
      "Monitor performance, usage, and health in one clean interface with real-time insights and alerts.",
    image: "/gp1.png",
  },
  {
    title: "Automations & Workflows",
    body:
      "Build no-code workflows that connect your tools and eliminate repetitive tasks in minutes.",
    image: "/gp1.png",
  },
  {
    title: "Team Collaboration",
    body:
      "Assign roles, share context, and comment inline. Keep everyone aligned from kickoff to delivery.",
    image: "/gp1.png",
  },
  {
    title: "Security & Compliance",
    body:
      "Enterprise-grade controls, SSO, and audit logs—so IT can sleep at night and teams can move fast.",
    image: "/gp1.png",
  },
];

  return (
      <section className="container mx-auto px-4 py-24 space-y-20">
        {featureSections.map((f, idx) => (
          <div
            key={f.title}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div>
              <div className="aspect-[16/11]">
                <img src={f.image} alt={f.title} className="h-full w-full object-cover" />
              </div>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">{f.title}</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">{f.body}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                  Actionable insights
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                  Customizable views
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                  Fast, secure, reliable
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section>
  );
}
