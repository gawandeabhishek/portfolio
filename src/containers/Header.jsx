import MackbookCanvas from "../components/MackbookCanvas";

const Header = () => {
  return (
    <section className="w-full h-screen flex justify-start items-center">
      <div className="h-full flex flex-col items-center justify-center w-1/2">
        <h1 className="text-5xl font-bold w-full text-blue-600">
          <span className="text-6xl">&#128075;</span> I'm Abhishek Gawande.
        </h1>
        <p className="text-sm p-10 pe-40 text-slate-700 dark:text-slate-500">
          Welcome to my MERN stack web developer portfolio! As a passionate and
          skilled developer, I specialize in creating dynamic and responsive web
          applications using the powerful MERN (MongoDB, Express.js, React.js,
          Node.js) stack.
        </p>
      </div>
      <div className="h-screen flex items-center justify-center w-1/2">
        <MackbookCanvas />
      </div>
    </section>
  );
};

export default Header;
