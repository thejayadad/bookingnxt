import TrainerCard from "@/components/card/trainer-card";
import trainersData from "@/data/trainers";

export default function Home() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-screen-xl p-4">
        {trainersData.length === 0 ? (
          <div className="text-center p-4 text-lg text-gray-700">
            No trainers available at the moment.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trainersData.map((trainer) => (
              <TrainerCard
              key={trainer.id}
                trainer={trainer}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
