export default function Footer() {
  const date = new Date();
  return (
    <footer className="flex flex-col sm:flex-row gap-8 justify-between p-10 bg-base-200">
      <aside>
        <p className="text-3xl flex items-center gap-2">
          Portfolio
        </p>
        <small>Copyright &copy; {date.getFullYear().toString()} - All rights reserved</small>
      </aside>

      <nav className="flex gap-4">
        <a className="btn bth-ghost btn-sm btn-circle">
          <i className="bx bxl-github text-2xl" />
        </a>
        <a className="btn bth-ghost btn-sm btn-circle">
          <i className="bx bxl-linkedin text-2xl" />
        </a>
      </nav>
    </footer>
  )
}