import { useParams } from "react-router-dom";

const DishDetails = () => {
  const { dishId } = useParams();

  return (
    <main className="min-h-screen bg-warm-ivory px-4 py-10 text-text-primary">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-burnt-orange">
        Dish Details
      </p>

      <h1 className="mt-4 font-serif text-[48px] leading-[0.95] tracking-[-0.03em]">
        {dishId}
      </h1>
    </main>
  );
};

export default DishDetails;
