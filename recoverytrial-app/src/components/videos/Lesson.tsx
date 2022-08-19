import Link from "next/link";

interface LessonProps {
  title: string;
  exerciseDescription: string;
  link: string;
}

const Lesson = ({ exerciseDescription, title, link }: LessonProps) => {
  return (
    <Link href={link}>
      <div className="rounded border bg-gray-400 border-gray-600 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span className="text-xs rounded px-2 py-[0.125rem] text-pink-100 border border-white font-bold">
            {exerciseDescription}
          </span>
        </header>

        <strong className="mt-5 block">{title}</strong>
      </div>
    </Link>
  );
};

export default Lesson;
