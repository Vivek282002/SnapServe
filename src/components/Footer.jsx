export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container text-center">
        <h4 className="mb-3">SnapServe</h4>
        <ul className="list-inline">
          <li className="list-inline-item"><a className="text-light text-decoration-none" href="#">Home</a></li>
          <li className="list-inline-item"><a className="text-light text-decoration-none" href="#">About</a></li>
          <li className="list-inline-item"><a className="text-light text-decoration-none" href="#">Contact</a></li>
          <li className="list-inline-item"><a className="text-light text-decoration-none" href="#">Privacy</a></li>
        </ul>
        <p className="mt-3 mb-0">&copy; 2025 SnapServe. All rights reserved.</p>
      </div>
    </footer>
  );
}
