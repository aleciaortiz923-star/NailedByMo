import Carousel from "../components/Carousel";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold my-8">Welcome to My Portfolio!</h1>
      <p className="text-lg mb-8">Here are a few pictures of some of the nails I have done over the years</p>
      <Carousel />
    </div>
  );
}
