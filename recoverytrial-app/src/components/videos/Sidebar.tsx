import Lesson from "./Lesson";

const Sidebar = () => {
  return (
    <aside className="sm:w-[348px] bg-gray-100 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-pink-100 block text-blue-200">
        Plano de treinos
      </span>

      <div className="flex flex-col gap-8">
        <Lesson
          key="Lesson key"
          title="Titulo aqui"
          exerciseDescription="Descrição aqui"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
