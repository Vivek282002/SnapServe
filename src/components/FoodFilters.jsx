export default function FoodFilters({ filters, setFilters }) {
  return (
    <div className="bg-light p-3 rounded shadow-sm">
      <h5>Filters</h5>

      <label>Cuisine</label>
      <select
        className="form-select mb-2"
        value={filters.cuisine}
        onChange={(e) => setFilters((f) => ({ ...f, cuisine: e.target.value }))}
      >
        <option>All</option>
        <option>Indian</option>
        <option>Italian</option>
        <option>American</option>
      </select>

      <label>Rating</label>
      <select
        className="form-select mb-4"
        value={filters.rating}
        onChange={(e) => setFilters((f) => ({ ...f, rating: e.target.value }))}
      >
        <option>All</option>
        <option value="4+">4+ stars</option>
        <option value="3+">3+ stars</option>
      </select>
    </div>
  );
}
