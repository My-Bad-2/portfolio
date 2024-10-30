export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center text-center gap-6 max-w-xl m-8">
        <h1 className="text-5xl font-bold">A Low-Level Developer</h1>

        <span>
          I am a low-level Developer. Currently working on my Kernel.
        </span>

        <div className="flex gap-4">
          <a className="btn btn-primary">
            Resume
            <i className="bx bxs-rocket text-sm" />
          </a>

          <a className="btn btn-neutral">
            Blog
            <i className="bx bxl-blogger text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
}
