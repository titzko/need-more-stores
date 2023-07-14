
export default function Spinner() {
  return (
    <div className="spinner-backdrop modal-backdrop fade show d-flex justify-content-center align-items-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}