import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const testimonialsData = [
  {
    text: "I recommend upsense to anyone who looks for quality and elegance. They had been creative, passionate and above all competent throughout the process during our engagement. We had received outstanding reactions for our website and those are amazingly positive which made a clear growth in our business as well.",
    name: "Lawrance de Silva",
    title: "CEO @ Burgundy Consultants",
    image: "/lawrance-image.png",
  },
  {
    text: "I have been primarily working with upsense since 2020 and it’s been fantastic! They work quickly and produce consistently quality results. Upsense takes my ideas and turns them into a professional design that meets my objectives. I highly recommend them.",
    name: "Aishat Azma",
    title: "Founder - Dreamero",
    image: "/aishat-image.png",
  },
  {
    text: "It was a fantastic experience working with upsense. As someone who is new to this space, I was able to provide only limited guidance on what I wanted, but they somehow delivered exactly what I was looking for right off the bat. I would recommend upsense 100%.",
    name: "Neeraj RJ",
    title: "CEO FintechVB",
    image: "/neeraj-image.png",
  },
  {
    text: "Upsense did a great job working on our business website. They were reactive, to the point, and easy to work with, and also came with good ideas. They were keen to communicate and plan calls to make sure we were aligned.",
    name: "Ivan Leens",
    title: "Business Owner",
    image: "/ivan-image.png",
  },
  {
    text: "I had the pleasure of working with upsense for the design of my landing page, and I must say, the experience was nothing short of exceptional. From the onset, they demonstrated a deep understanding of design principles, user experience, and aesthetics that are crucial for crafting engaging online spaces.",
    name: "Juan Manuel",
    title: "CEO - Arenaton",
    image: "/juan-image.png",
  },
  {
    text: "Working with uPsense Studio was an absolute pleasure! They strike the perfect balance between creative design flair and truly listening to their clients' needs. I was blown away by how quickly they turned my requests into beautiful, functional website features. Highly recommend!",
    name: "Prof - Sigrid Adriaenssens",
    title: "Princeton University. NJ.USA",
    image: "/sigrid-image.png",
  },
];

export default function Testimonials() {
  return (
    <div className="h-[40rem] bg-black rounded-md flex flex-col antialiased relative overflow-hidden">
      {/* Dot Background */}
      <div className="absolute inset-0 h-full w-full bg-dot-black/[0.2] dark:bg-dot-white/[0.2] pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center bg-black/[0.5] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <p className='text-center text-[#fb5607] font-semibold text-5xl py-[100px]'>
        Hear the praise
      </p>
      <InfiniteMovingCards
        items={testimonialsData}
        direction="right"
        speed="slow"
        className=""
      />
    </div>
  );
}
